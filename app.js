const authenticateToken = require('./authenticate/athenticator');
const getData = require('./configuration/index');

let express = require('express');
let app = express();


app.get('/auth/verify', function (req, res) {
    res.send(getData.verify);
});

app.get('/auth/google', function (req, res) {
    res.send(getData.token);
});

app.get('/authenticateToken', function (req, res) {
    authenticateToken();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});