// -------------SET UP ---------

var express = require('express');
var app = express();  							// Create our app with express
var mongoose = require('mongoose');            // mongoose for mongodb
var port     = process.env.PORT || 3000; 		// set the port
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var config = require('./config/config');
// var fs = require('fs');

//-----------LOAD CONFIG-----------

app.set('dbUrl', config.db[app.settings.env]);
mongoose.connect(app.get('dbUrl'));

 app.use(express.static(__dirname + '/public'));
 app.use(morgan('dev'));                                         // log every request to the console
 app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
 app.use(bodyParser.json());                                     // parse application/json
 app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

//var expressLogFile = fs.createWriteStream('./logs/express.log', {flags: 'a'});


// routes ======================================================================
require('./app/routes.js')(app);

// DEPRECATED ROUTES============================================================
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/send-post.html', function (req, res) {
   res.sendFile( __dirname + "/" + "send-post.html" );
});

app.get('/file-upload.html', function (req, res) {
   res.sendFile( __dirname + "/" + "file-upload.html" );
});

app.get('/hello-world', function (req, res) {
   res.sendFile( __dirname + "/" + "/public/hello-world.html" );
});

//-----------REQUEST HANDLERS-----------

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});


//-----------SETTING UP SERVER-----------
app.listen(port);
console.log("App listening on port " + port);
