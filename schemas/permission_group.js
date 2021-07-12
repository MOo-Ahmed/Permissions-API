const Sequelize = require("sequelize");

var PermissionGroup = sequelize.define('permission_group', {
    id : {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    }
  }, {
    freezeTableName: true 
});

module.exports = PermissionGroup;