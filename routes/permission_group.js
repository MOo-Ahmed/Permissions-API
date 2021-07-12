const express = require('express'); 
const PermGroupController = require("../resources/permission_group/controller.js");
   
module.exports = function(app){
    app.post('/api/permission_group/create', (req, res) => {
        let group = req.body;
        result = PermGroupController.add(group);  
        res.send(result);
    });
}