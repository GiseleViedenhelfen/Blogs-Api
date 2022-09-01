const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};
module.exports = { validToken };