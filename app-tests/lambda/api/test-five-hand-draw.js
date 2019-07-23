'use strict';
var path        = require('path');
const chai = require('chai');
const expect = chai.expect;

const pokersolver = require('pokersolver').Hand;

const Card = require('../../../app/lambda/api/Card');

describe('Test Five Hand Draw', function ()
{
    it('Test 3 of a kind', async function()
    {
        let hand = [
            new Card('Q', 'h'),
            new Card('9', 's'),
            new Card('Q', 's'),
            new Card('3', 'h'),
            new Card('Q', 'd')
        ];

        let classifiedHand = pokersolver.solve(hand.map( (card) => card.ToCardName() ), "standard");

        expect(classifiedHand.name).contains('Three of a Kind');
    })
});
