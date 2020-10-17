const express = require('express');
const routes = express.Router();

const TesteController = require('./controllers/TesteController');

routes.get('/teste', TesteController.teste);

module.exports = routes;