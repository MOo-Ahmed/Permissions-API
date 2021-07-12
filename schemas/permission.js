const Sequelize = require("sequelize");

var Permission = sequelize.define('permission', {
    id : {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    moduleName: {
      type: Sequelize.STRING,
      field: "module_name",
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

module.exports = Permission;