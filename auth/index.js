const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const router = require('express').Router();

const variables = require('../api/shared/vars');

passport.use(new GoogleStrategy(
    {
        clientID: '62224069829-j4d47hb7t24f91k1vmi3sg1lesc4mtm6.apps.googleusercontent.com',
        clientSecret: variables.googleSecret,
        callbackURL: '/auth/google/callback'
    },
    ((accessToken, refreshToken, profile, done) => {
        process.nextTick(() => {
            console.log(`This needs to be stuffed into a cache ...accessToken: ${accessToken}`);
            console.log(JSON.stringify(profile));
            done(null, profile);
        });
    })
));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/family',
        failureRedirect: '/bad'
    })
);
router.get('/auth/google/logout', (req, res) => {
    console.log('logging out');
    req.logout();
    res.redirect('/');
});

module.exports = router;
