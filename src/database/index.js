const dbconfig = require('../config/database');
const Sequelize = require('sequelize');

const connection = new Sequelize(dbconfig);

try {
    connection.authenticate();
    console.log('Banco de dados conectado');
}catch(error) {
    console.log('Erro ao conectar no banco de dados');
}
