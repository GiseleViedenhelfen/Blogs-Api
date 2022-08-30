const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });
 User.associate = (models) => {
  User.hasMany(models.BlogPost, {
    foreignKey: 'id',
    as: 'BlogPosts',
  }, {
    timestamps: false,
    tableName: 'User',
  });
 }
  return User;
};

module.exports = User;