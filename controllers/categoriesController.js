const serviceCategories = require('../services/category');

const createCategory = async (req, res) => { 
  const { name } = req.body;
  const newCategory = await serviceCategories.categories(name);
  res.status(201).json(newCategory); 
};

module.exports = { createCategory };