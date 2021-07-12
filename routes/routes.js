module.exports = function(app){
    require('./permission.js')(app);
    require('./permission_group.js')(app);
}