const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const router = require('express').Router();
const log = require('bole');
const uuid = require('uuid');

const variables = require('./vars.js');

passport.use(new googleStrategy({
        clientID: '62224069829-j4d47hb7t24f91k1vmi3sg1lesc4mtm6.apps.googleusercontent.com',
        clientSecret: variables.googleSecret,
        callbackURL: "/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

function getUserName(req, res) {
    req.log = log(`getUserName...${uuid()}`);

    passport.authenticate('google', {
        scope: ['email', 'profile']
    }, (req, res, next) => {
        req.log.info('authentication..');
        next(null, result);

        res.send();
    });
}

function googleLoginCallback(req, res) {
    console.log(req.session);
    res.send('OK');
}

router.post('/auth/google/login', (req, res, next) => {
    if (!req.session) req.session = {};
    if (req.query.return) {
        req.session.oauth2return = req.query.return;
    }
    next();
}, passport.authenticate('google', {
    scope: ['email', 'profile']
}));

router.get('/auth/google/callback', googleLoginCallback);

module.exports = router;