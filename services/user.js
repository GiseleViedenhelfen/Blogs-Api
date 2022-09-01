const { User } = require('../src/database/models');

const findById = async (id) => {
  const result = await User.findByPk(id,
    { attributes: { exclude: ['password'] } });
  return result;
};
const getAll = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  const result = user.map((item) => item.dataValues);
  return result;
};
module.exports = { getAll, findById };