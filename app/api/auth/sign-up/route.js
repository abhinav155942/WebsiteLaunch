import { NextResponse } from 'next/server';
const { query } = require('../../../../lib/db');
const { generateId, generateToken, hashPassword } = require('../../../../lib/auth');

export async function POST(request) {
  try {
    const { email, password, name = '' } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const existingUser = await query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    const userId = generateId();
    const passwordHash = await hashPassword(password);

    await query(
      `INSERT INTO users (id, name, email, password_hash, credits)
       VALUES ($1, $2, $3, $4, $5)`,
      [userId, name, email, passwordHash, 10]
    );

    const sessionId = generateId();
    const token = generateToken();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await query(
      `INSERT INTO sessions (id, token, user_id, ip_address, user_agent, expires_at)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        sessionId,
        token,
        userId,
        request.headers.get('x-forwarded-for') || 'unknown',
        request.headers.get('user-agent') || '',
        expiresAt
      ]
    );

    const response = NextResponse.json({
      session: {
        id: sessionId,
        token: token,
        userId: userId,
        expiresAt: expiresAt.toISOString()
      },
      user: {
        id: userId,
        name: name,
        email: email,
        emailVerified: false,
        credits: 10
      }
    });

    response.cookies.set('session_token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Sign-up error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
