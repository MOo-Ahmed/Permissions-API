'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("permission_group_permissions", {
      permission_id : {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      permission_group_id : {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW'),
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("permission_group_permissions");
  }
};
