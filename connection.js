const Sequelize = require('sequelize');
const con = require('./config.js');

var sequelize = new Sequelize(con['database'], con['user'], con['password'], {
    host: con['host'],
    dialect: con['dialect']
});

module.exports = sequelize;
global.sequelize = sequelize;