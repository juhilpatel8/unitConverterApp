
var express= require('express');
var bodyParser = require('body-parser');
import routes from './routes/convertRoute';
var constants = require('./config/config');


var app = express();
app.use(bodyParser.json());


// Register our routes in app
app.use('/', routes);



app.listen(constants.port, function () {
    console.log('API listening on port',constants.port);
});

export default app;
