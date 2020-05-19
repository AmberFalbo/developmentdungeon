'use strict';
/// Reference for partners on 201 project I'm calling each time someone flips a card a "play", I didn't know what else to call it and I didn't want to use clicks or flips.


var parentElement = document.getElementById('memoryGame');
/// We will need to change the array to actual content 
var allCards = ['div','div','code','code','js','js','html','html','cf','cf','canvas','canvas','css','css','forLopp','forLoop', 'whileLoop', 'whileLoop', 'Lena', 'Lena'];
var cardsFlipped = [];
var cards = [];
var flippedOver = 0;


/// Create cards (this is not right)
allCards.prototype.render = function(){
for(var i = 0; i < allCards.length; i++){
  var divElement = document.createElement('div');
  
  divElement.setAttribute('class', '_' + allCards[i]);

  document.getElementById('memoryGame').innerHTML = deck
  parentElement.appendChild(divElement);
}
}

////Begining of each game or after a reset. (^ and below need to be in same function)Each game has to start will no cards flipped over and cards in random spots.
function startGame(){
    flippedOver = 0;
   /// use Math.random function somewhere in here 
    var deck = '';
    allCards.randomNumber();
    for(i < allCards.length; i++);
  }



//// Random number function
Array.prototype.randomNumber(min=0, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/// Check and see if 0, 1 or 2 cards are flipped over if 2 are then those cards would "clear".
function playerMoves(carD, plays){
	if(carD.innerHTML == "" && cardsFlipped.length < 2){
		carD.style.background = 'white';
		carD.innerHTML = plays;
		if(cardsFlipped.length == 0){
			cardsFlipped.push(plays);
            cards.push(carD.id);
            
            /// Allow another card to flip
		} else if(cardsFlipped.length == 1){
			cardsFlipped.push(plays);
			cards.push(carD.id);
			if(cardsFlipped[0] == cardsFlipped[1]){

                flippedOver += 2;
                cardsFlipped = [];
                cards = [];
            }
        }
    }

/// Clear function to "reset" that play not the whole deck. FOR SINGLE PLAYS
    function clear(){
        var firstCard = document.getElementById(cards[0]);
        var secondCard = document.getElementById(cards[1]);

        firstCard.style.background = 'black';
        firstCard.innerHTML = "";
        secondCard.style.background = 'black';
        secondCard.innerHTML = "";
        
        cardsFlipped = [];
        cards = [];
    }
    setTimeout(clear, 1000);
}


/// Once all cards are flipped this is where we'll have the after page Trevor I'm going to need you're help on this for right now I have it just say "finish". FOR END OF GAME/ could use parts for restart
function finishedGame(){
    if(flippedOver == allCards.length){
        alert("FINISHED");
        document.getElementById('memory_board').innerHTML = "";
        startGame();

}
/// Create array of cards  (content)
/// Place cards on board randomly
/// function to allow cards to match
/// Check both cards if matched stay if not flip back over 
/// Be able to see when game is finished 