import { NextResponse } from 'next/server';
const { query } = require('../../../../lib/db');

export async function GET(request) {
  try {
    const token = request.cookies.get('session_token')?.value ||
                 request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const result = await query(
      `SELECT u.credits 
       FROM sessions s 
       JOIN users u ON s.user_id = u.id 
       WHERE s.token = $1 AND s.expires_at > NOW()`,
      [token]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    return NextResponse.json({ credits: result.rows[0].credits });
  } catch (error) {
    console.error('Get credits error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
