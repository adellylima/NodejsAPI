'use strict';

module.exports = app => {

    const controller = require('../controllers/produtosController')();

    app.post('/produtos', controller.post);
    app.get('/produtos', controller.get);
    app.put('/produtos/:id', controller.put);
    app.delete('/produtos/:id', controller.delete);
    app.search('/produtos/:id', controller.search);
 
} 