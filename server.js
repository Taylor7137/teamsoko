var express = require("express"),
	 logger = require("morgan")('dev'),
	 moment = require('moment'),
	 path    = require('path'),
	 mongoose = require('mongoose'),
	 Schema = mongoose.Schema,
	 bodyParser = require('body-parser'),
	 server = express();
	 
server.use(express.static(__dirname+'/public'));
server.use(logger);
server.set('port', process.env.PORT || 8080);

server.get('/', home);
server.get('/videos', videos);

function home(req, res){
  res.sendFile('/html/index.html', {root: __dirname+'/public'});
}

function videos(req, res){
	res.sendFile('/html/videos.html', {root: __dirname+'/public'})
}

server.listen(server.get('port'), listenCallback);

function listenCallback(){
  console.log('Now listening on port ' + server.get('port'));
}


