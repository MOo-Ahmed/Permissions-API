const PermissionGroup = require("./model.js");

function validate(group){
    var name = group.name;
    if(name.length < 3){
        return "Error : The permission name must be at least 3 characters." ;
    }
    var a = 0;
    for(a = 0 ; a < group.permissions.length ; a++){
        if(isNaN(group.permissions[a]))    
            return "Error : The permissions should be only numerical values." ;
    }
    if(group.permissions.length < 1){
        return "Error : There must be at least 1 permission." ;
    }
    else return true;
}

exports.add = function (group) {
    /*
    var msg = validate(group);
    if(msg == true){
        return PermissionGroup.create(group);
    }
    */
    return PermissionGroup.create(group);
};