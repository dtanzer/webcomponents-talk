
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/*.html', function (req, res) {
	console.log('serving index.html for '+req.url);
	res.sendFile('index.html', {
		root: __dirname + '/../',
	});
});

app.get('/', function (req, res) {
	console.log('serving index.html for '+req.url);
	res.sendFile('index.html', {
		root: __dirname + '/../',
	});
});

app.listen(8080, function () {
	console.log('Testing server listening on port 8080!');
});
