const Sequelize = require("sequelize");
const PermissionGroup = require("./permission_group.js");
const Permission = require("./permission.js");

var PermissionGroupPermissions = sequelize.define('permission_group_permissions', {
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
  }, {
    freezeTableName: true 
});

Permission.belongsToMany(PermissionGroup, { through: PermissionGroupPermissions });
PermissionGroup.belongsToMany(Permission, { through: PermissionGroupPermissions });

module.exports = PermissionGroupPermissions;