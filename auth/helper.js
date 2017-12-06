
// Simple middleware to ensure user is authenticated.
// Use this middleware on any resource that needs to be protected.
// If the request is authenticated (typically via a persistent login session),
// the request will proceed.  Otherwise, the user will be redirected to the
// login page.
exports.ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        // req.user is available for use here
        return next();
    }

    // denied. redirect to login
    return res.redirect('/bad');
};

