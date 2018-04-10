// express is the server that forms part of the nodejs program
var express = require('express');
var app = express();
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
next();
});
// serve static files - e.g. html, css
app.use(express.static(__dirname));
var https = require('https');
var fs = require('fs');
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4443);

<a class="mdl-navigation__link" href="" onclick=" callDivChange ();return false;"><i class="mdlcolor-text--blue-grey-400 material-icons" role="presentation">forum</i>Change Div Content</a>
app.get('/', function (req, res) {

// run some server-side code
console.log('the server has received a request');
res.send('Hello World');
});

