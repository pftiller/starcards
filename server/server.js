const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/star-wars.router');
const port = process.env.PORT || 5000;
/** -------- MONGOOSE CONNECTION --------**/
var mongoose = require('mongoose');

var databaseUrl = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL;

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});

mongoose.connect(databaseUrl);

module.exports = mongoose;

app.use(express.static('server/public/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use('/router', router);


app.listen(port, function() {
    console.log('up on: ', port);
});
