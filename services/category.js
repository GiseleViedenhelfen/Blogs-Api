const { Category } = require('../src/database/models');

const categories = async (name) => {
  const result = await Category.create({ name });
  return result.dataValues;
};
const getAll = async () => {
  const result = await Category.findAll();
  return result;
};
module.exports = {
  categories,
  getAll,
};