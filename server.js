var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/list', function (req, res) {
    res.json({text: 'Hola mundo :)'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});