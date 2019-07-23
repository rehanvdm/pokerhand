
class Card
{
    /**
     * Create a Card
     * @param {char} rank, example: '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'
     * @param {char} suit Char, example:  'c' (Club), 'd' (Diamond), 'h' (Heart), 's' (Spade)
     */
    constructor(rank, suit)
    {
        this.rank = rank;
        this.suit = suit;
    }

    /**
     * Returns Card to be used with classification
     * @returns {*}
     */
    ToCardName()
    {
        return this.rank + this.suit;
    }

    /**
     * Returns Card with suites symbol
     * @returns {string}
     */
    ToCardNamePretty()
    {
        let ret = this.rank;

        switch (this.suit)
        {
            case 'c':
                ret += "♣";
                break;
            case 'd':
                ret += "♦";
                break;
            case 'h':
                ret += "♥";
                break;
            case 's':
                ret += "♠";
                break;
        }

        return ret;
    }
}

/* Public Static */
Card.Suits = [ 'c', 'd', 'h', 's' ];
Card.Ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

module.exports = Card;