
'use strict';

module.exports = (app) => {
    var mongoose = require('mongoose');

    var db = mongoose.connection;

    db.on('error', console.error);

    db.once('open', function () {
        console.log('Conectado ao banco de dados produtosdb MongoDB.')
    });

    // var url = 'mongodb://xuxu:a123456@ds133262.mlab.com:33262/produtosdb';
    var url = 'mongodb://produtos:a1b2c3d4@ds133622.mlab.com:33622/produtosdb';
    mongoose.connect(url, { useNewUrlParser: true });
}