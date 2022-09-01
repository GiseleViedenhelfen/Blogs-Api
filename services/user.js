const { User } = require('../src/database/models');

const getAll = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  const result = user.map((item) => item.dataValues);
  return result;
};
module.exports = { getAll };