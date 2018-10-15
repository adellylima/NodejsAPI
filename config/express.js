
'use strict';

var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('port', 3001); 

require('./server.js')(app);
require('../routes/app')(app);
require('../routes/produtosRoute')(app);

module.exports =  app;