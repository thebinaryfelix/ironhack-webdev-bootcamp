// eslint-disable-next-line no-unused-vars
class MemoryGame {
  constructor(cards) {
    this.cards = cards.slice();
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCard() {
    if (this.cards.length === 0) return [];
    let indexOfCards = [];
    const cardsToSelect = [];
    const newCards = [];

    // Write numbers from 1 to N
    for (let i = 0; i < this.cards.length; i += 1) {
      indexOfCards.push(i);
    }

    // Shuffle algorithim
    while (this.cards.length !== cardsToSelect.length) {
      // Select a number between 1 and N
      const randomNum = Math.floor(Math.random() * this.cards.length + 1);
      const selectedNum = this.cards.length - randomNum;

      if (cardsToSelect.indexOf(this.cards[selectedNum]) === -1) {
        cardsToSelect.push(this.cards[selectedNum]);
        indexOfCards = indexOfCards.filter(indexNum => indexNum !== selectedNum);
      }
    }
    // End of shuffling

    cardsToSelect.forEach(card => newCards.push(card));
    return newCards.length === 0 ? [] : newCards;
  }

  checkIfPair(firstCard, secondCard) {
    const result = firstCard === secondCard;
    this.pairsClicked += 1;
    if (result) {
      this.pairsGuessed += 1;
    }
    return result;
  }

  finished() {
    return this.cards.length === 0 ? false : this.pairsGuessed === this.cards.length / 2;
  }
}
