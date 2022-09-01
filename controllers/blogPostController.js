const blogPost = require('../services/post');

const getAll = async (req, res) => {
  const allCategories = await blogPost.getAll();
  return res.status(200).json(allCategories);
};

module.exports = { getAll };