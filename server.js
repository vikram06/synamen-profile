var express = require('express');
var app = express();

app.use(express.static(__dirname + '/view'));

app.listen(process.env.PORT || 3000);

console.log('-------------------------------------------------------------------');
console.log('Application available at http://url:' + (process.env.PORT || 3000))
console.log('-------------------------------------------------------------------');
