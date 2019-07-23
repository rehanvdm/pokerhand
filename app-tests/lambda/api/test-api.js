'use strict';
var path        = require('path');
const chai = require('chai');
const expect = chai.expect;

describe('Test Success', function ()
{
    it('Should return thank you', async function()
    {
        this.timeout(10*1000);
        let app = require('../../../app/lambda/api/app.js');
        let result = await app.handler(null, null);

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');
    })
});
