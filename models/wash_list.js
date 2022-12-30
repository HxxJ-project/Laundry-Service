'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wash_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.wash_list.belongsTo(models.user, { foreignKey: 'user_id' });
    }
  }
  wash_list.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    extra: {
      type: DataTypes.STRING(500),
    },
    image: {
      type: DataTypes.STRING(500),
    },
  }, {
    sequelize,
    modelName: 'wash_list',
  });
  return wash_list;
};