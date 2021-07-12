const Permission = require("./model.js");


exports.add = function (perm) {
    var name = perm.name;
    if(name == null){
        return "Error : The permission name is required." ;
    }
    else if(name.length < 3){
        return "Error : The permission name must at least be 3 characters." ;
    }
    return Permission.create(perm);
};