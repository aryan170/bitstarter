var express = require('express');
var app = express();
var fs = require('fs');
var buf = new Buffer(fs.readFileSync('index.html'));
var outstr = buf.toString('utf-8');

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(outstr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
