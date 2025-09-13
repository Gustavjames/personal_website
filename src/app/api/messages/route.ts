import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, email, subject, message } = await request.json();
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get client information
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     '127.0.0.1';
    
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Create new message
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
      ipAddress,
      userAgent,
      timestamp: new Date(),
      isRead: false,
      status: 'new'
    });

    await newMessage.save();

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: newMessage._id
    });

  } catch (error) {
    console.error('Send message error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    const status = searchParams.get('status') || 'all';

    // Build filter
    const filter = status !== 'all' ? { status } : {};

    // Get messages with pagination
    const messages = await Message.find(filter)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit)
      .select('-__v');

    // Get total count
    const total = await Message.countDocuments(filter);

    // Get statistics
    const stats = await Message.aggregate([
      {
        $group: {
          _id: null,
          totalMessages: { $sum: 1 },
          newMessages: { $sum: { $cond: [{ $eq: ['$status', 'new'] }, 1, 0] } },
          readMessages: { $sum: { $cond: [{ $eq: ['$status', 'read'] }, 1, 0] } },
          repliedMessages: { $sum: { $cond: [{ $eq: ['$status', 'replied'] }, 1, 0] } },
          archivedMessages: { $sum: { $cond: [{ $eq: ['$status', 'archived'] }, 1, 0] } }
        }
      }
    ]);

    return NextResponse.json({
      success: true,
      data: {
        messages,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        },
        statistics: stats[0] || {
          totalMessages: 0,
          newMessages: 0,
          readMessages: 0,
          repliedMessages: 0,
          archivedMessages: 0
        }
      }
    });

  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
