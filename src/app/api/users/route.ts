import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Get users with pagination
    const users = await User.find()
      .sort({ loginTime: -1 })
      .skip(skip)
      .limit(limit)
      .select('-__v');

    // Get total count
    const total = await User.countDocuments();

    // Get statistics
    const stats = await User.aggregate([
      {
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          uniqueEmails: { $addToSet: '$email' },
          deviceTypes: { $push: '$deviceType' },
          browsers: { $push: '$browser' },
          operatingSystems: { $push: '$os' }
        }
      },
      {
        $project: {
          totalUsers: 1,
          uniqueEmailCount: { $size: '$uniqueEmails' },
          deviceTypeStats: {
            $reduce: {
              input: '$deviceTypes',
              initialValue: {},
              in: {
                $mergeObjects: [
                  '$$value',
                  {
                    $arrayToObject: [
                      [{ k: '$$this', v: { $add: [{ $ifNull: [{ $getField: { field: '$$this', input: '$$value' } }, 0] }, 1] } }]
                    ]
                  }
                ]
              }
            }
          },
          browserStats: {
            $reduce: {
              input: '$browsers',
              initialValue: {},
              in: {
                $mergeObjects: [
                  '$$value',
                  {
                    $arrayToObject: [
                      [{ k: '$$this', v: { $add: [{ $ifNull: [{ $getField: { field: '$$this', input: '$$value' } }, 0] }, 1] } }]
                    ]
                  }
                ]
              }
            }
          },
          osStats: {
            $reduce: {
              input: '$operatingSystems',
              initialValue: {},
              in: {
                $mergeObjects: [
                  '$$value',
                  {
                    $arrayToObject: [
                      [{ k: '$$this', v: { $add: [{ $ifNull: [{ $getField: { field: '$$this', input: '$$value' } }, 0] }, 1] } }]
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    ]);

    return NextResponse.json({
      success: true,
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        },
        statistics: stats[0] || {
          totalUsers: 0,
          uniqueEmailCount: 0,
          deviceTypeStats: {},
          browserStats: {},
          osStats: {}
        }
      }
    });

  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }

    const result = await User.deleteOne({ email });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
