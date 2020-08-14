
var express= require('express');
var bodyParser = require('body-parser');
import routes from './routes/unitRoute';

var app = express();
app.use(bodyParser.json());


// Register our routes in app
app.use('/', routes);



app.listen(8080, function () {
    console.log('API listening on port 3000!');
});

export default app;
