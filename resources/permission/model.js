const con = require('../../connection.js');
const Permission = require("../../schemas/permission.js");

exports.create = function (perm) {
  Permission.create({
    name: perm.name,
    description: perm.description,
    moduleName: perm.module_name
  })
};