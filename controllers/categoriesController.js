const serviceCategories = require('../services/category');

const createCategory = async (req, res) => { 
  const { name } = req.body;
  const newCategory = await serviceCategories.categories(name);
  res.status(201).json(newCategory); 
};
const getAll = async (req, res) => {
  const allCategories = await serviceCategories.getAll();
  return res.status(200).json(allCategories);
};
module.exports = {
  createCategory,
  getAll,
};