var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  var fileText = fs.readFileSync('index.html').toString();
  response.send(fileText);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
