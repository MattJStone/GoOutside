const router = require('express').Router();
const log = require('bole');
const uuid = require('uuid');

const auth = require('./../../auth/helper');
const family = require('./family');

function postFamily(req, res) {
    req.log = log(`postFamily...${uuid()}`);
}


async function getFamily(req, res) {
    req.log = log(`getFamily..${uuid()}`);

    req.log.info(`id: ${req.user.id}...${req.user.displayName} `);
    const query = {
        log: log(`postFamily...${uuid()}`),
        googleName: req.user.id
    };

    try {
        res.status(200).send(await family.getFamily(query));
    } catch (err) {
        req.log.err(err.message);
        res.status(500).send(err.message);
    }
}


// router.post('/family', postFamily);
router.get('/family/', auth.ensureAuthenticated, getFamily);

module.exports = router;
