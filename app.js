var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: 'GBltAhcIGaWBiohWyXukyQ',
  consumer_secret: 'EZODy_uF2UCkd4uqCyOgrmNdmAY',
  token: 'nHaXfHn0xY8WWQpC8B26egU08xdBKUQW',
  token_secret: 'dP8MHaybnx0YMBjpUBg8EkaSpgE',
});

app.use(express.static(__dirname + '/static'));
app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
});


http.listen(port, function(){
 console.log('listening on ' + port);
});

