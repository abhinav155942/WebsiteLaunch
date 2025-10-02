import { NextResponse } from 'next/server';
const { query } = require('../../../../lib/db');

export async function GET(request) {
  try {
    const token = request.cookies.get('session_token')?.value ||
                 request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { session: null, user: null },
        { status: 401 }
      );
    }

    const sessionResult = await query(
      `SELECT s.*, u.* 
       FROM sessions s 
       JOIN users u ON s.user_id = u.id 
       WHERE s.token = $1 AND s.expires_at > NOW()`,
      [token]
    );

    if (sessionResult.rows.length === 0) {
      return NextResponse.json(
        { session: null, user: null },
        { status: 401 }
      );
    }

    const row = sessionResult.rows[0];

    return NextResponse.json({
      session: {
        id: row.id,
        token: row.token,
        userId: row.user_id,
        ipAddress: row.ip_address,
        userAgent: row.user_agent,
        expiresAt: row.expires_at,
        createdAt: row.created_at,
        updatedAt: row.updated_at
      },
      user: {
        id: row.user_id,
        name: row.name,
        email: row.email,
        emailVerified: row.email_verified,
        image: row.image,
        createdAt: row.created_at,
        updatedAt: row.updated_at
      }
    });
  } catch (error) {
    console.error('Get session error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
