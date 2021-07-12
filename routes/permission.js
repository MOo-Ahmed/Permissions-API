const express = require('express');
const PermController = require("../resources/permission/controller.js");

module.exports = function(app){
    app.post('/api/permission/create', (req, res) => {
        let permission = req.body;
        result = PermController.add(permission);  
        res.send(result);
    });
}