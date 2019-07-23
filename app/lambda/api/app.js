const pokersolver = require('pokersolver').Hand;

const Card = require('./Card');
const Deck = require('./Deck');
const IShuffler = require('./Shufflers/IShuffler');
const RandomShuffler = require('./Shufflers/RandomShuffler');

module.exports.handler = async (event, context) =>
{
    let response = null;

    try
    {
        let htmlOutput = "";

        let randomShuffler = new RandomShuffler(100);
        let deck = new Deck(randomShuffler);

        let hand = deck.GetCards(5);

        htmlOutput += "Your hand: ";
        for (let card of hand)
            htmlOutput += card.ToCardNamePretty();
        htmlOutput += "<br>";

        let classifiedHand = pokersolver.solve(hand.map( (card) => card.ToCardName() ), "standard"); /* Other games/classifiers can be specified here instead of standard like: threecard */
        htmlOutput += "You have: " + classifiedHand.name;

        /* Extra step to transform non-unicode to HTML Entities */
        htmlOutput = htmlOutput.replace(/♣/g, '&clubs;')
                                .replace(/♦/g, '&diams;')
                                .replace(/♥/g, '&hearts;')
                                .replace(/♠/g, '&spades;');

        console.log(htmlOutput);
        response = {
                        statusCode: 200,
                        headers: {
                            'Content-Type': 'text/html',
                        },
                        body: htmlOutput
                    };
    }
    catch (err)
    {
        console.error(err);
        response = { statusCode: 500, body: 'Oops! something went wrong' };
    }
    finally
    {
        return response;
    }
};