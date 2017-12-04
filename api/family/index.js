const router = require('express').Router();
const log = require('bole');
const fetch = require('node-fetch');

const auth = require('../shared/auth');

function postFamily(req, res) {
    req.log = log(`postFamily...${uuid()}`);

}

router.post('/family', postFamily);

function getFamily(req, res) {
    // confirm the user has logged in
    
}

module.exports = router;