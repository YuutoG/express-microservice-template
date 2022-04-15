const User = require('./User.js')
const Sexo = require('./Sexo.js')

User.belongsTo(Sexo, {
  foreignKey: 'idSexo'
})
Sexo.hasMany(User, {
  foreignKey: 'idSexo'
})

module.exports = {
  User,
  Sexo
}
