const fetch = require('node-fetch');

const model = require('./auth.model');
const vars = require('./../vars');

module.exports.login = req => new Promise((resolve, reject) => {
    req.log.debug(`validating user: ${req.username}`);

    // does the user exist in the system
    model.getProfile(req).then((profile) => {
        if (!profile.sessionId) {
            fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    secretKey: vars.goOutsideSecret
                }
            })
        }
    }).catch((err) => {
        if (err) {
            // some unusual issue has arisen so handle this properly
            return req.log.error(`Error in auth.login: ${err.message}`);
        }
        // user not found, they need to register
        return {code: 401, message: 'user not registered'};
    });
});