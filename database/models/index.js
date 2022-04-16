const User = require('./User.js')
const Sex = require('./Sex.js')

// User Associations
User.belongsTo(Sex, {
  foreignKey: 'idSexo'
})

// Sex Associations
Sex.hasMany(User, {
  foreignKey: 'idSexo'
})
module.exports = {
  User,
  Sex
}
