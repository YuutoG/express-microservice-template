'use strict'
const {
  Model, DataTypes
} = require('sequelize')
const sequelize = require('../connection.js')

class Sexo extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate (models) {
    // define association here
  }
}
Sexo.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: DataTypes.STRING
}, {
  sequelize: sequelize.connect(),
  modelName: 'Sexo'
})

module.exports = Sexo
