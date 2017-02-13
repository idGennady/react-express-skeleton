var path = require('path');

exports.routers = function(app){
    // home 
    app.get('/', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../build/pages/home.html'));
    });

    // include static files
    app.get('/build/scripts/:bundle', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../build/scripts/' + req.params.bundle));
    });

    // error 
    app.get('*', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../build/pages/error.html'));
    });
}