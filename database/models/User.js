'use strict'
const {
  Model, DataTypes
} = require('sequelize')
const connection = require('../connection.js')

class User extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate (models) {
    // define association here
  }
}
User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  idSexo: DataTypes.INTEGER,
  active: DataTypes.BOOLEAN
}, {
  sequelize: connection.connect(),
  modelName: 'User'
})
module.exports = User
