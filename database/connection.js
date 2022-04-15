const { Sequelize } = require('sequelize')
const databases = require('../configurations/databases')

async function connectionTest (params) {
  const sequelize = new Sequelize(databases.development)
  try {
    await sequelize.authenticate()
    console.log('Connection Successful')
  } catch (error) {
    console.log(error)
  }
}

connectionTest()
