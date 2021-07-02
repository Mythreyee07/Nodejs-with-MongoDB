var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(express.json())
var route = require('./app/routes/order');
app.use(route);
app.use("/api",route);


var dbConfig = require('./app/config/db.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
	useNewUrlParser: true,
    useUnifiedTopology: true 
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})


app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});