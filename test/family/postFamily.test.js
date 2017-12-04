
const chai = require('chai');
const sinon = require('sinon');
const bole = require('../boleSetup.js');
const uuid = require('uuid');

describe('Family', () => {
    describe('Posts', () => {
        const assert = chai.assert;
        const postReq = {};
        let log;

        before(() => {
            log = bole();
        });

        beforeEach(() => {
            postReq.log = log(uuid.v4());
        });

        
    });
});