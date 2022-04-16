'use strict'
const {
  Model, DataTypes
} = require('sequelize')
const connection = require('../connection.js')
class Sex extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate (models) {
    // define association here
  }
}
Sex.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: DataTypes.STRING
}, {
  sequelize: connection.connect(),
  modelName: 'Sex'
})

module.exports = Sex
