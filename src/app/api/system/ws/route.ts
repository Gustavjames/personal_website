
// Check if running in server environment
const isServerEnvironment = typeof window === 'undefined' && process.env.NODE_ENV === 'production';

export async function GET() {
  // In server environment, WebSocket is not available, return error message
  if (isServerEnvironment) {
    return new Response(JSON.stringify({ 
      error: 'WebSocket not available in server environment',
      message: 'Use polling instead of WebSocket for system monitoring'
    }), { 
      status: 501,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // In development environment, try to create WebSocket server
  try {
    const { WebSocketServer } = await import('ws');
    
    // Note: On most deployment platforms, independent WebSocket servers cannot be created
    // This is only for development environment
    return new Response(JSON.stringify({ 
      message: 'WebSocket server would start in development mode',
      note: 'This feature is not available in production deployment'
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('WebSocket not available:', error);
    
    return new Response(JSON.stringify({ 
      error: 'WebSocket not available',
      message: 'Use polling instead of WebSocket for system monitoring'
    }), { 
      status: 501,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
