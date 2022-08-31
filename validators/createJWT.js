const jwt = require('jsonwebtoken');
const { User } = require('../src/database/models');

const JWT_SECRET = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) { 
    return res.status(400).json({ message: 'Invalid fields' });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  res.status(200).json({ token });
};