const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var user = require('./Controller/userControler');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.listen(8080, () => console.log('Server started at 8080 port'));
app.use('/user', user);
