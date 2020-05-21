'use strict';

/// Global

var tries = 5;

var uniqueIndexArray = [];

var definitionArray = [
    ['HTML', 'Hypertext Markup Language (HTML)'],
    ['CSS', 'Cascading Style Sheets'],
    ['GitHub', 'GitHub is a web-based version-control and collaboration platform for software developers'],
    ['DOM', 'Document Object Model'],
    ['Repo', 'A directory or storage space where your projects can live'],
    ['CSS selectors', 'CSS selectors are used to "find" (or select) the HTML elements you want to style'],
    ['HTML Form', 'An HTML form is used to collect user input'],
    ['HTML tag', 'The <html> tag is the container for all other HTML elements']
    // ['HTML button', 'The <button> tag defines a clickable button'],
    // ['JS function', 'JavaScript functions are defined with the function keyword'],
    // ['JS object', 'An object is a collection of properties, and a property is an association between a name (or key) and value'],
    // ['HTML onclick', 'The onclick event occurs when the user clicks on an element'],
    // ['JS prototype', 'Prototypes are the mechanism by which JavaScript objects inherit features from one another'], ['JS constructor', 'The constructor method is a special method for creating and initializing an object created within a class'],
    // ['CSS Layout', 'Layout is a two-dimensional layout system for the web'],
    // ['Git ACP', 'git add, commit, push command line commands'],
    // ['test1', 'deff1'],
    // ['test2', 'deff2'],
    // ['test3', 'deff3'],
    // ['test4', 'deff4'],
    // ['test5', 'deff5']

]

var tdArray = [];
// var parentElement = 

/// Going from the outter loop to the inner loop to give cards id's allowing matches to be made 
function definitionToTD(){
    for(let i = 0; i < definitionArray.length; i++){
        var setArray = [];

        for(let j = 0; j < definitionArray[i].length; j++){
            
            var data = document.createElement('td');
            data.setAttribute('class', definitionArray[i][0]);
            data.textContent = definitionArray[i][j];

            setArray.push(data);
        }
        tdArray.push(setArray);
    }
}

var finalArray = [];

/// Seperate cards from array to able them to be placed indiviaually 
function individualCards(){
    for(let i = 0; i < tdArray.length; i++){
        for(let j = 0; j < tdArray[i].length; j++){
            finalArray.push(tdArray[i][j]); 
        }
    }

}



function getRandomIndex(){
    var index = randomNumber(0, finalArray.length);
// console.log('here' + index)

///------------------------------------------------------ may get endless loop over 16
    while(uniqueIndexArray.includes(finalArray[index])){
        index = randomNumber(0, finalArray.length);
    }

    uniqueIndexArray.push(finalArray[index]);

    //-------------------------------------------
    // if (uniqueIndexArray.length > 16){
        //     uniqueIndexArray.shift();
        // }
        
    }
    
var tableParent = document.getElementById('game')
function renderCardsTable(){

    var num = 0;

    for(var i = 0; i < 4; i++){
        var tableRow = document.createElement('tr');

        for (var j = 0; j < 4; j++){
            tableRow.appendChild(uniqueIndexArray[num]);
            num++;
        } 
        tableParent.appendChild(tableRow);
    }



}
var scoreMemory = 0;
var flippedCards = [];
var cardsMatched = [];
var firstCard;

var parentElement = document.getElementById('game');

parentElement.addEventListener('click', function handler(){
    event.preventDefault();
    flippedCards.push(event.target.className);
    cardsMatched.push(event.target);
    if(flippedCards.length > 2){
        flippedCards.shift();
    }
    
    if(flippedCards[0] === flippedCards[1] && cardsMatched[0] !== cardsMatched[1]){
        scoreMemory += 100
        console.log('I am True');
        // firstCard = document.getElementsByClassName(flippedCards[0]);

        cardsMatched[0].style.visibility = 'hidden';
        cardsMatched[1].style.visibility = 'hidden';

        flippedCards = [];
        cardsMatched = [];
        
    }else if(scoreMemory === 800){
        console.log('YOU\'VE LEARNED SO MUCH!!');
        scoreMemory = 0;
        uniqueIndexArray = [];
        loadRenderTable();
    }else{
        if(cardsMatched[0].id !== 'game' && cardsMatched[1].id !== 'game'){
            tries--;
        }

        flippedCards = [];
        cardsMatched = [];

        console.log('here: ' + tries);
        console.log('I am False');
        
    }

    if(tries === 0){
        // Game Over

        // -------- Stretch Goal --------------------
        // Show Easy mod button
    }
});


// function createAMatch(){
//     var matchMatch = [];

//     for(var r = 0; r < uniqueIndexArray.length; r++){
//         for(var i = 0; i < definitionArray.length; i++){
//             var j = definitionArray[i][0];
//             var matches = document.getElementsByClassName(j);
//             console.log('fuckthis' + matches);
//         }
//     }
//     matchMatch.push(matches);
// }



//// Helper function, random number function (exclusive)
function randomNumber(min=0, max){
  return Math.floor(Math.random() * (max - min));
}

function loadRenderTable(){
    definitionToTD();
    individualCards();

    for(let i = 0; i < 16; i++){
        getRandomIndex();
    }
    renderCardsTable();
}

loadRenderTable();





// /// Reference for partners on 201 project I'm calling each time someone flips a card a "play", I didn't know what else to call it and I didn't want to use clicks or flips.


// var parentElement = document.getElementById('memoryGame');
// /// We will need to change the array to actual content 
// var allCards = ['div','div','code','code','js','js','html','html','cf','cf','canvas','canvas','css','css','forLopp','forLoop', 'whileLoop', 'whileLoop', 'Lena', 'Lena'];
// var cardsFlipped = [];
// var cards = [];
// var flippedOver = 0;


// /// Create cards (this is not right)
// allCards.prototype.render = function(){
// for(var i = 0; i < allCards.length; i++){
//   var divElement = document.createElement('div');
  
//   divElement.setAttribute('class', '_' + allCards[i]);

//   document.getElementById('memoryGame').innerHTML = deck
//   parentElement.appendChild(divElement);
// }
// }

// ////Begining of each game or after a reset. (^ and below need to be in same function)Each game has to start will no cards flipped over and cards in random spots.
// function startGame(){
//     flippedOver = 0;
//    /// use Math.random function somewhere in here 
//     var deck = '';
//     allCards.randomNumber();
//     for(i < allCards.length; i++);
//   }



// //// Random number function
// Array.prototype.randomNumber(min=0, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// /// Check and see if 0, 1 or 2 cards are flipped over if 2 are then those cards would "clear".
// function playerMoves(carD, plays){
// 	if(carD.innerHTML == "" && cardsFlipped.length < 2){
// 		carD.style.background = 'white';
// 		carD.innerHTML = plays;
// 		if(cardsFlipped.length == 0){
// 			cardsFlipped.push(plays);
//             cards.push(carD.id);
            
//             /// Allow another card to flip
// 		} else if(cardsFlipped.length == 1){
// 			cardsFlipped.push(plays);
// 			cards.push(carD.id);
// 			if(cardsFlipped[0] == cardsFlipped[1]){

//                 flippedOver += 2;
//                 cardsFlipped = [];
//                 cards = [];
//             }
//         }
//     }

// /// Clear function to "reset" that play not the whole deck. FOR SINGLE PLAYS
//     function clear(){
//         var firstCard = document.getElementById(cards[0]);
//         var secondCard = document.getElementById(cards[1]);

//         firstCard.style.background = 'black';
//         firstCard.innerHTML = "";
//         secondCard.style.background = 'black';
//         secondCard.innerHTML = "";
        
//         cardsFlipped = [];
//         cards = [];
//     }
//     setTimeout(clear, 1000);
// }


// /// Once all cards are flipped this is where we'll have the after page Trevor I'm going to need you're help on this for right now I have it just say "finish". FOR END OF GAME/ could use parts for restart
// function finishedGame(){
//     if(flippedOver == allCards.length){
//         alert("FINISHED");
//         document.getElementById('memory_board').innerHTML = "";
//         startGame();

// }
// /// Create array of cards  (content)
// /// Place cards on board randomly
// /// function to allow cards to match
// /// Check both cards if matched stay if not flip back over 
// /// Be able to see when game is finished 
