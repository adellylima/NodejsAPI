'use strict';

module.exports = app => {
    var express = require('express');
    var produtosRouter = express.Router();
    produtosRouter.route('')
        .get(function (req, res) {
            res.send("Exibindo a página principal...");
        });
    app.use('/produtos', produtosRouter)
} 