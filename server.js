var express = require('express');
var exphbs = require('express-handlebars')

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log('app running on http//localhost:' + PORT);
});