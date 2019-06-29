// Start program after DOM is ready
$(document).ready(() => {
  // Creates new object called "memoryGame" that points to "cards" array using a constructor function assigned to a variable called "MemoryGame"
  // eslint-disable-next-line no-undef
  const myGame = new MemoryGame(cards);
  let html = '';

  myGame.cards = myGame.shuffleCard();
  // Gets each object inside the "cards" array and puts is name and img inside html objects
  myGame.cards.forEach(card => {
    html += `<div class= "card" id="card_${card.name}">`;
    html += '<div class="back"';
    html += `    name="${card.img}">`;
    html += '</div>';
    html += '<div class="front" ';
    html += `style="background: url(img/${card.img}) no-repeat">`;
    html += '</div>';
    html += '</div>';
  });

  // Adds all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  // eslint-disable-next-line func-names
  $('.back').on('click', function() {
    if (myGame.pickedCards.length < 2) {
      $(this).toggleClass('back front');
      $(this)
        .next()
        .toggleClass('front back');

      myGame.pickedCards.push($(this));

      if (myGame.pickedCards.length === 2) {
        if (
          !myGame.checkIfPair(
            myGame.pickedCards[0].parent().attr('id'),
            myGame.pickedCards[1].parent().attr('id')
          )
        ) {
          setTimeout(() => {
            myGame.pickedCards[0].toggleClass('back front');
            myGame.pickedCards[0].next().toggleClass('front back');
            myGame.pickedCards[1].toggleClass('back front');
            myGame.pickedCards[1].next().toggleClass('front back');
            myGame.pickedCards = [];
          }, 500);
        } else {
          myGame.pickedCards = [];
        }
      }
      $('#pairs_clicked').text(myGame.pairsClicked);
      $('#pairs_guessed').text(myGame.pairsGuessed);
    }
  });
});
