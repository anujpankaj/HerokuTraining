const Sequelize = require('sequelize');
const sequelize = new Sequelize('df633qg2s15gvn', 'lwrucnljmypemu', '9e300f865b1b830575dbcfea2f1c72bdd2956f6620d2d0add805587862a7055a',
{
    host : 'ec2-54-147-209-121.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: '5432',
    dialectOptions: {
        ssl: {
            require: true,           
            rejectUnauthorized: false,
          },      
    },
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    }
});
module.exports=sequelize;