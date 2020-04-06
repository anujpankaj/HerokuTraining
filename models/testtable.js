const Sequelize = require('sequelize');
const sequelizedb = require('../Util/database');
const testtable = sequelizedb.define('test_table', {
    id : {
            type : Sequelize.INTEGER,
            primaryKey : true
    },
    name : {
        type : Sequelize.STRING
    }
});

module.exports = testtable;