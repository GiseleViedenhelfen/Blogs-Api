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
 return res.status(200).json(users);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const User = await userService.findById(id);
  return res.status(200).json(User);
};
module.exports = { createUser, getAll, getById };