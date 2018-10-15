'use strict';

module.exports = app => {
    var express = require('express');
    var produtosRouter = express.Router();
    
    const controller = require('../controllers/produtosController')();

    produtosRouter.post('/', controller.post);
    produtosRouter.get('/', controller.get);
    produtosRouter.put('/:id', controller.put);
    produtosRouter.delete('/:id', controller.delete);
    produtosRouter.search('/:id', controller.search);
 
    app.use('/produtos', produtosRouter)
} 