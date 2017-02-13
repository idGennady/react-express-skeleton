var express = require('express');
var app     = express();

var routers = require('./routers/routers');
    routers.routers(app);

app.listen(3000, function(err){
  err ? console.log('Error ' + err) : console.log('Server run in port 3000')
});