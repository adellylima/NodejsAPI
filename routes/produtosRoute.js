'use strict';

module.exports = app => {
    var express = require('express');
    var produtosRouter = express.Router();
    
    const controller = require('../controllers/produtosController')();

    produtosRouter.post('/', controller.post);
    produtosRouter.get('/', controller.get);
 
    app.use('/produtos', produtosRouter)
} 