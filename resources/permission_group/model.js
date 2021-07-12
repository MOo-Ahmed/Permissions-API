const con = require('../../connection.js');
const PermissionGroup = require("../../schemas/permission_group.js");
const PermGrPermissions = require("../../schemas/permission_group_permissions.js");

exports.create = function (group) {
    PermissionGroup.create({
        name: group.name,
        description: group.description
    }).then(function (insertedGroup) {
        const id = insertedGroup.dataValues['id'];
        var records = [];
        group.permissions.forEach(p => {
            PermGrPermissions.create({
                permission_id: p,
                permission_group_id: id
            })
        });
    })

};