const IShuffler = require('./IShuffler');

class RandomShuffler extends IShuffler
{

    constructor(timesToShuffle)
    {
        super();
        this.timesToShuffle = timesToShuffle;
    }

    /**
     * @param {Card[]} cards
     * @returns {Card[]}
     */
    Shuffle(cards)
    {
        for(let i = 0; i < this.timesToShuffle; i++)
        {
            let index1 = Math.round(Math.random()*(cards.length-1));
            let index2 = Math.round(Math.random()*(cards.length-1));

            /* Swap the card at two random indexes */
            let cardAtIndex1 = cards[index1];
            cards[index1] = cards[index2];
            cards[index2] = cardAtIndex1;
        }

        return cards;
    }
}

module.exports = RandomShuffler;