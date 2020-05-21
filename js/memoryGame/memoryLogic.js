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
  ['CSS-selectors', 'CSS selectors are used to "find" (or select) the HTML elements you want to style'],
  ['HTML-Form', 'An HTML form is used to collect user input'],
  ['HTML-tag', 'The <html> tag is the container for all other HTML elements']
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

];

var backgroundColor = ['blue', 'red', 'green', 'gray', 'yellow', 'pink', 'orange', 'purple'];

document.getElementById('startGame').addEventListener('submit', function handler(event){
  event.preventDefault();
  console.log('Is this working?');
  loadRenderTable();
  document.getElementById('startGame').style.visibility = 'hidden';
});


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

var tableParent = document.getElementById('game');
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
    scoreMemory += 100;
    console.log('I am True');
    // firstCard = document.getElementsByClassName(flippedCards[0]);

    cardsMatched[0].style.visibility = 'hidden';
    cardsMatched[1].style.visibility = 'hidden';

    flippedCards = [];
    cardsMatched = [];

  }else if(scoreMemory === 800){
    console.log('YOU\'VE LEARNED SO MUCH!!');
    alert(`You scored ${scoreMemory}`);
    scoreMemory = 0;
    uniqueIndexArray = [];
    parentElement.removeEventListener('click', handler);

  }else if(tries === 0){
    console.log('Shoot!');
    alert(`You scored ${scoreMemory}`);
    scoreMemory = 0;
    uniqueIndexArray = [];
    for(var i = 0; i < definitionArray.length; i++){
      document.getElementsByClassName(definitionArray[i][0])[0].style.backgroundColor = backgroundColor[i];
      document.getElementsByClassName(definitionArray[i][0])[1].style.backgroundColor = backgroundColor[i];

    }
    // console.log(document.getElementsByClassName('DOM'))
    parentElement.removeEventListener('click', handler);

  }else{
    if(cardsMatched[0].id !== 'game' && cardsMatched[1].id !== 'game'){
      tries--;
    }

    flippedCards = [];
    cardsMatched = [];

    console.log('here: ' + tries);
    console.log('I am False');

  }

  document.getElementById('score').textContent = `Score: ${scoreMemory}, You have ${tries} tries left.`;

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






