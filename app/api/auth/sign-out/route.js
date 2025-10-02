import { NextResponse } from 'next/server';
const { query } = require('../../../../lib/db');

export async function POST(request) {
  try {
    const token = request.cookies.get('session_token')?.value ||
                 request.headers.get('authorization')?.replace('Bearer ', '');

    if (token) {
      await query('DELETE FROM sessions WHERE token = $1', [token]);
    }

    const response = NextResponse.json({ message: 'Signed out successfully' });
    response.cookies.delete('session_token');
    
    return response;
  } catch (error) {
    console.error('Sign-out error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
