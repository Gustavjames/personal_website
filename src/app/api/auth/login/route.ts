import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email, name } = await request.json();
    
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    // Get client information
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     '127.0.0.1';
    
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referrer = request.headers.get('referer') || 'Direct';
    
    // Parse user agent to get device info
    const deviceInfo = parseUserAgent(userAgent);
    
    // Generate session ID
    const sessionId = uuidv4();

    // Check if user already exists
    let user = await User.findOne({ email });
    
    if (user) {
      // Update existing user
      user.loginTime = new Date();
      user.ipAddress = ipAddress;
      user.userAgent = userAgent;
      user.deviceType = deviceInfo.deviceType;
      user.browser = deviceInfo.browser;
      user.os = deviceInfo.os;
      user.referrer = referrer;
      user.sessionId = sessionId;
      user.isActive = true;
      user.lastSeen = new Date();
      await user.save();
    } else {
      // Create new user
      user = new User({
        email,
        name,
        ipAddress,
        userAgent,
        deviceType: deviceInfo.deviceType,
        browser: deviceInfo.browser,
        os: deviceInfo.os,
        referrer,
        sessionId,
        isActive: true,
        lastSeen: new Date()
      });
      await user.save();
    }

    return NextResponse.json({
      success: true,
      message: 'User data saved successfully',
      sessionId: user.sessionId
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function parseUserAgent(userAgent: string) {
  const ua = userAgent.toLowerCase();
  
  // Detect device type
  let deviceType = 'Desktop';
  if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
    deviceType = 'Mobile';
  } else if (ua.includes('tablet') || ua.includes('ipad')) {
    deviceType = 'Tablet';
  }

  // Detect browser
  let browser = 'Unknown';
  if (ua.includes('chrome')) browser = 'Chrome';
  else if (ua.includes('firefox')) browser = 'Firefox';
  else if (ua.includes('safari')) browser = 'Safari';
  else if (ua.includes('edge')) browser = 'Edge';
  else if (ua.includes('opera')) browser = 'Opera';

  // Detect OS
  let os = 'Unknown';
  if (ua.includes('windows')) os = 'Windows';
  else if (ua.includes('mac')) os = 'macOS';
  else if (ua.includes('linux')) os = 'Linux';
  else if (ua.includes('android')) os = 'Android';
  else if (ua.includes('ios')) os = 'iOS';

  return { deviceType, browser, os };
}
