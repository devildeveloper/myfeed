
/**
 * Module dependencies.
 */

var routes = require('App/Routes');
var express = require("express");
var http=require('http');
var path=require('path')
var app = express();

app.use(express.logger());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('nodejs is running on port ' + app.get('port'));
});

