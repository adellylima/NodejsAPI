
'use strict';

let express = require('express');
let cors = require('cors');

let app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('port', 3001); 

require('./server')(app);
require('../controllers/produtosController')(app);
require('../routes/app')(app);
require('../routes/produtosRoute')(app);

module.exports =  app;