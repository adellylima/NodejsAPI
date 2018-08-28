
var express = require('express');
var produtosRouter = express.Router();
var produtosController = require('../controllers/produtosController');
produtosRouter.route('')
    .get(produtosController);
module.exports = produtosRouter; 