const { BlogPost, Category, User } = require('../src/database/models');

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });
  return result;
};

module.exports = { getAll };