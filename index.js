const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bole = require('bole');

const app = express();

const variables = require('./api/shared/vars.js');
const auth = require('./auth/helper');

// Get the settings required for startup
const port = process.env.PORT || variables.port; // used to create, sign, and verify tokens

// const config = require('./api/shared/config'); // get our config file
bole.output({
    level: variables.loggingMode,
    stream: process.stdout
});


app.use(require('body-parser').urlencoded({ extended: true }));

app.use(session({
    secret: 'secrettexthere',
    saveUninitialized: true,
    resave: true
}));


app.use(passport.initialize());
app.use(passport.session());
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

app.get('/main', (req, res) => {
    res.send(`You are OK, are you authenticated? ${req.isAuthenticated()} ${JSON.stringify(req.user)}`);
});

app.get('/bad', (req, res) => {
    const html = "<ul><li>You're not looged in. <a href='/auth/google'>Log in here</a></li></ul>";
    res.send(html);
});


app.get('/protected', auth.ensureAuthenticated, (req, res) => {
    res.send('access granted. secure stuff happens here');
});

// Routing
app.use('/', require('./auth/index'));
app.use('/', require('./api/family/index'));

// Listen
app.listen(port);

console.log(`Getting it done at http://localhost:${port}`);
