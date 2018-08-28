var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var produtoModel = new Schema({
      nome : String,
      descricao : String,
      preco : Number,
      estoque : Number,
      ativo : { type: Boolean, default: true}
});

var Produto = require('../models/produtoModel');
var get = function (req,res) {        
          Produto.find(function (err, produtos) {
            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(produtos);
            }
        });
     };
module.exports = get;     
module.exports = mongoose.model("Produto",produtoModel);