const { Category } = require('../src/database/models');

const categories = async (name) => {
  const result = await Category.create({ name });
  return result.dataValues;
};
module.exports = { categories };