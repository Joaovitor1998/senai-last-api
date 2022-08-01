const Sequelize = require('sequelize');
require('dotenv').config();

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT
} = process.env;

const CONFIGS = {
    dialect: DB_DIALECT,
    host: DB_HOST
}

module.exports = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    CONFIGS
);