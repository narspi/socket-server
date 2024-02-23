const mariadb = require("mariadb");

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUSer = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

module.exports = Object.freeze({
    pool: mariadb.createPool({
        host: dbHost,
        user: dbUSer,
        password: '',
        database: dbName
    })
});