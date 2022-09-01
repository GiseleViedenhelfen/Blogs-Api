const { BlogPost } = require('../src/database/models');

const getAll = async () => {
  const result = await BlogPost.findAll();
  return result;
};

module.exports = { getAll };