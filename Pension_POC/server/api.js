var express = require('express');
var config = require('../config');

var app = express();

app.set('port', (config.PORT || 5000));

app.use(express.static( './client/dist'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});