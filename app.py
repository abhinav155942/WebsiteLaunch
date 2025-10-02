from flask import Flask, jsonify, request, send_from_directory, send_file
from flask_cors import CORS
from sqlalchemy import create_engine, Column, String, Integer, DateTime, Boolean, Text
from sqlalchemy.orm import sessionmaker, scoped_session, declarative_base
from datetime import datetime, timedelta
import os
import secrets
import bcrypt

app = Flask(__name__, static_folder='.')
CORS(app)

DATABASE_URL = os.getenv('DATABASE_URL')
if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set")

engine = create_engine(DATABASE_URL)
SessionLocal = scoped_session(sessionmaker(bind=engine))
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String)
    email_verified = Column(Boolean, default=False)
    image = Column(String, nullable=True)
    subscription_plan = Column(String, default='free')
    subscription_expiry = Column(DateTime, nullable=True)
    credits = Column(Integer, default=10)
    daily_messages = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Session(Base):
    __tablename__ = 'sessions'
    
    id = Column(String, primary_key=True)
    token = Column(String, unique=True, nullable=False)
    user_id = Column(String, nullable=False)
    ip_address = Column(String)
    user_agent = Column(Text)
    expires_at = Column(DateTime, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

Base.metadata.create_all(engine)

def generate_id():
    return secrets.token_urlsafe(24)

def generate_token():
    return secrets.token_urlsafe(24)

def hash_password(password):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def verify_password(password, password_hash):
    return bcrypt.checkpw(password.encode('utf-8'), password_hash.encode('utf-8'))

def get_session_from_token(token):
    db = SessionLocal()
    try:
        session = db.query(Session).filter(
            Session.token == token,
            Session.expires_at > datetime.utcnow()
        ).first()
        if session:
            user = db.query(User).filter(User.id == session.user_id).first()
            return session, user
        return None, None
    finally:
        db.close()

@app.route('/api/auth/get-session', methods=['GET'])
def get_session():
    token = request.cookies.get('session_token') or request.headers.get('Authorization', '').replace('Bearer ', '')
    
    if not token:
        return jsonify({"session": None, "user": None}), 401
    
    session, user = get_session_from_token(token)
    
    if not session or not user:
        return jsonify({"session": None, "user": None}), 401
    
    return jsonify({
        "session": {
            "id": session.id,
            "token": session.token,
            "userId": session.user_id,
            "ipAddress": session.ip_address,
            "userAgent": session.user_agent,
            "expiresAt": session.expires_at.isoformat() + 'Z',
            "createdAt": session.created_at.isoformat() + 'Z',
            "updatedAt": session.updated_at.isoformat() + 'Z'
        },
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "emailVerified": user.email_verified,
            "image": user.image,
            "createdAt": user.created_at.isoformat() + 'Z',
            "updatedAt": user.updated_at.isoformat() + 'Z'
        }
    })

@app.route('/api/auth/sign-up', methods=['POST'])
def sign_up():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    name = data.get('name', '')
    
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    
    db = SessionLocal()
    try:
        existing_user = db.query(User).filter(User.email == email).first()
        if existing_user:
            return jsonify({"error": "User already exists"}), 400
        
        user_id = generate_id()
        user = User(
            id=user_id,
            name=name,
            email=email,
            password_hash=hash_password(password),
            credits=10
        )
        db.add(user)
        
        session_id = generate_id()
        token = generate_token()
        session = Session(
            id=session_id,
            token=token,
            user_id=user_id,
            ip_address=request.remote_addr,
            user_agent=request.headers.get('User-Agent', ''),
            expires_at=datetime.utcnow() + timedelta(days=7)
        )
        db.add(session)
        db.commit()
        
        response = jsonify({
            "session": {
                "id": session.id,
                "token": session.token,
                "userId": session.user_id,
                "expiresAt": session.expires_at.isoformat() + 'Z'
            },
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "emailVerified": user.email_verified,
                "credits": user.credits
            }
        })
        response.set_cookie('session_token', token, httponly=True, max_age=7*24*60*60)
        return response
    except Exception as e:
        db.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        db.close()

@app.route('/api/auth/sign-in', methods=['POST'])
def sign_in():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    
    db = SessionLocal()
    try:
        user = db.query(User).filter(User.email == email).first()
        if not user or not verify_password(password, user.password_hash):
            return jsonify({"error": "Invalid credentials"}), 401
        
        session_id = generate_id()
        token = generate_token()
        session = Session(
            id=session_id,
            token=token,
            user_id=user.id,
            ip_address=request.remote_addr,
            user_agent=request.headers.get('User-Agent', ''),
            expires_at=datetime.utcnow() + timedelta(days=7)
        )
        db.add(session)
        db.commit()
        
        response = jsonify({
            "session": {
                "id": session.id,
                "token": session.token,
                "userId": session.user_id,
                "expiresAt": session.expires_at.isoformat() + 'Z'
            },
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "emailVerified": user.email_verified,
                "credits": user.credits
            }
        })
        response.set_cookie('session_token', token, httponly=True, max_age=7*24*60*60)
        return response
    except Exception as e:
        db.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        db.close()

@app.route('/api/auth/sign-out', methods=['POST'])
def sign_out():
    token = request.cookies.get('session_token') or request.headers.get('Authorization', '').replace('Bearer ', '')
    
    if token:
        db = SessionLocal()
        try:
            db.query(Session).filter(Session.token == token).delete()
            db.commit()
        finally:
            db.close()
    
    response = jsonify({"message": "Signed out successfully"})
    response.set_cookie('session_token', '', expires=0)
    return response

@app.route('/api/user/credits', methods=['GET'])
def get_credits():
    token = request.cookies.get('session_token') or request.headers.get('Authorization', '').replace('Bearer ', '')
    
    if not token:
        return jsonify({"error": "Unauthorized"}), 401
    
    session, user = get_session_from_token(token)
    
    if not user:
        return jsonify({"error": "Unauthorized"}), 401
    
    return jsonify({"credits": user.credits})

@app.route('/api/user/subscription', methods=['GET'])
def get_subscription():
    token = request.cookies.get('session_token') or request.headers.get('Authorization', '').replace('Bearer ', '')
    
    if not token:
        return jsonify({"error": "Unauthorized"}), 401
    
    session, user = get_session_from_token(token)
    
    if not user:
        return jsonify({"error": "Unauthorized"}), 401
    
    return jsonify({
        "subscriptionPlan": user.subscription_plan,
        "subscriptionExpiry": user.subscription_expiry.isoformat() + 'Z' if user.subscription_expiry else None,
        "credits": user.credits,
        "dailyMessages": user.daily_messages
    })

@app.route('/')
def serve_index():
    return send_file('index.html')

@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(path):
        if os.path.isfile(path):
            return send_file(path)
        else:
            index_path = os.path.join(path, 'index.html')
            if os.path.exists(index_path):
                return send_file(index_path)
    return send_file('index.html')

@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
