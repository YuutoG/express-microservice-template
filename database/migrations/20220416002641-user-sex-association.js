'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('Users', {
      fields: ['idSexo'],
      type: 'foreign key',
      name: 'user_sex_association',
      references: {
        table: 'Sexes',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint('User', {
      fields: ['idSexo'],
      type: 'foreign key',
      name: 'user_sex_association',
      references: {
        table: 'Sexes',
        field: 'id'
      }
    })
  }
}
