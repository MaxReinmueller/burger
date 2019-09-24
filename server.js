var express = require('express');
var exphbs = require('express-handlebars')

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(routes);


app.listen(PORT, function() {
    console.log('app running on http//localhost:' + PORT);
});