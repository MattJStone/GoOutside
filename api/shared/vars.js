const env = require('./vars.json');

function config() {
    const nodeEnv = process.env.NODE_ENV || 'local';
    /* if (process.env.DB_PASSWORD) {
        env[nodeEnv].SQL_PASS = process.env.DB_PASSWORD;
    } */
    return env[nodeEnv];
}

module.exports = config();
