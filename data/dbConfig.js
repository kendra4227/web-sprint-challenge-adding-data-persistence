const knex = require('knex');
const { development } = require('../knexfile');
const configurations = require('../knexfile');
const environment = process.env.NODE_ENV || 'development';



module.exports = knex(configurations[environment]);