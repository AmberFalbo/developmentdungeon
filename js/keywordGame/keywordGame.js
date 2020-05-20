'use strict';

// Use this array to keep track of seen words and use it to display next word
var seenKeywords = [];

// Initialize the player's score
var playerScore = 0;

//=====================================================
//Keyword display for testing purposes. This will be replace once I figure out the animations.
function displayKeyword() {
  var parentSection = document.getElementById('test');
  parentSection.textContent = seenKeywords[seenKeywords.length-1];
}

// Update's player's score
function updateScore(value){
  playerScore += value;
}

// generates a new keyword checks to see if it's already in the seenKeywords array if it's not in there then push it to the end of the array
function getRandomKeyword(){
  // generate a string from a random index of keywordArray
  var index = randomNumberGen(0, keywordArray.length);

  // checks to see if there index is in seenKeywords array.
  while(seenKeywords.includes(keywordArray[index])){
    index = randomNumberGen(0, keywordArray.length);
  }

  seenKeywords.push(keywordArray[index]);

  if(seenKeywords.length > 10){
    seenKeywords.shift();
  }
}

// Random Int gen helper function
function randomNumberGen(min = 0, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// TODO This needs to be implemented by a Game Manager
getRandomKeyword();


// Player input text box.
document.getElementById('player').addEventListener('submit', function handler(event){
  event.preventDefault();

  var answer = event.target.playerInput.value;
  if (answer === seenKeywords[seenKeywords.length-1]){
    //clears the text box so the user can keep playing.
    document.getElementById('playerIn').value = '';
    scoreUp();
  } else {
    bomb.speed++;
  }
});

//Start game
document.getElementById('start').addEventListener('submit', function handler(event){
  event.preventDefault();
  console.log('Am I being pushed?');
  gameOn();
  document.getElementById('start').textContent = '';
});
