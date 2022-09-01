const jwt = require('jsonwebtoken');
const { user } = require('../src/database/models');
const userService = require('../services/user');

const { JWT_SECRET } = process.env;

const createUser = (req, res) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  res.status(201).json({ token });
};
const getAll = async (req, res) => {
 const users = await userService.getAll();
 console.log(users);
 return res.status(200).json(users);
};
module.exports = { createUser, getAll };