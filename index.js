const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bole = require('bole');

const variables = require('./api/shared/vars.js');

// Get the settings required for startup
const port = process.env.PORT || variables.port; // used to create, sign, and verify tokens

//const config = require('./api/shared/config'); // get our config file
bole.output({
    level: variables.loggingMode,
    stream: process.stdout
});

// Enable cors
app.use(cors());
app.options('*', cors());

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));



// Default
app.get('/', (req, res) => {
    res.send('Welcome to the Go Outside API!');
});

// Routing
app.use('/', require('./api/shared/auth.js'));

// Listen
app.listen(port);

console.log(`Getting it done at http://localhost:${port}`);