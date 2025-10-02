const bcrypt = require('bcryptjs');
const crypto = require('crypto');

function generateId() {
  return crypto.randomBytes(24).toString('base64url');
}

function generateToken() {
  return crypto.randomBytes(24).toString('base64url');
}

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function verifyPassword(password, passwordHash) {
  return await bcrypt.compare(password, passwordHash);
}

module.exports = {
  generateId,
  generateToken,
  hashPassword,
  verifyPassword
};
