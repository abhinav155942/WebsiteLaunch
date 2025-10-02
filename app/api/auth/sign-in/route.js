import { NextResponse } from 'next/server';
const { query } = require('../../../../lib/db');
const { generateId, generateToken, verifyPassword } = require('../../../../lib/auth');

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const result = await query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const user = result.rows[0];
    const validPassword = await verifyPassword(password, user.password_hash);

    if (!validPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const sessionId = generateId();
    const token = generateToken();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await query(
      `INSERT INTO sessions (id, token, user_id, ip_address, user_agent, expires_at)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        sessionId,
        token,
        user.id,
        request.headers.get('x-forwarded-for') || 'unknown',
        request.headers.get('user-agent') || '',
        expiresAt
      ]
    );

    const response = NextResponse.json({
      session: {
        id: sessionId,
        token: token,
        userId: user.id,
        expiresAt: expiresAt.toISOString()
      },
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.email_verified,
        credits: user.credits
      }
    });

    response.cookies.set('session_token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Sign-in error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
