var express = require('express');

var port = process.argv[2];

var app = express();

app.get("/home", function(req, resp) {
	resp.end("Hello World!");
});

app.listen(port);