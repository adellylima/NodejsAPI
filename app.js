var express = require('express');
var mongoose = require('mongoose');
var produtosRouter = require('./routes/ProdutosRoute');
var app = express();
var router = express.Router();

var url = 'mongodb://xuxu:a123456@ds133262.mlab.com:33262/produtosdb';
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao banco de dados produtosdb MongoDB.')
});
mongoose.connect(url,  { useNewUrlParser: true });
app.listen(5000, function () {
    console.log('Servidor escutando na porta 5000');
});
router.get('/', function(req, res) {
    res.send('Esta é página principal!');  
});
router.get('/teste', function(req, res) {
    res.send('Esta é a página teste'); 
});
app.use('/produtos',produtosRouter); 
