const Card = require('./Card');

class Deck
{
    /**
     *
     * @param {IShuffler} shuffler
     */
    constructor(shuffler)
    {
        this.shuffler = shuffler;

        this.cards = [];

        for(let i = 0; i < Card.Suits.length; i++)
        {
            for(let k = 0; k < Card.Ranks.length; k++)
            {
                this.cards.push(new Card(Card.Ranks[k],Card.Suits[i]));
            }
        }

        this.cards = this.shuffler.Shuffle(this.cards);
    }

    /**
     *
     * @param count
     * @returns {Card[]}
     * @constructor
     */
    GetCards(count)
    {
        /* TODO Might need to assign reminder of count to this.cards else draws the first count every time */
        return this.cards.splice(0,count);
    }
}

module.exports = Deck;