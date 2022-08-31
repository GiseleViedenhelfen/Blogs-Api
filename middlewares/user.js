const jwt = require('jsonwebtoken');
const { User } = require('../src/database/models');

const JWT_SECRET = process.env.JWT_SECRET || 'seusecretdetoken';

const name = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
  );
  }
  next();
};
const emailCheck = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
  return res.status(400).json(
    { message: '"email" must be a valid email' },
);
}
  next();
};
const passwordCheck = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  next();
};
const existentUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    res.status(409).json({ message: 'User already registered' });
  } else {
    await User.create({ displayName, email, password, image });
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  res.status(201).json({ token });
  next();
};
module.exports = {
  name,
  emailCheck,
  passwordCheck,
  existentUser,
};