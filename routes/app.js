'use strict';

module.exports = (app) => {
    var express = require('express');
    var router = express.Router();

    router.get('/', function (req, res) {
        res.send('Esta é página principal!');
    });
    router.get('/teste', function (req, res) {
        res.send('Esta é a página teste');
    });
    app.use('/',router);
}
