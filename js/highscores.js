'use strict';

var parentElement = document.getElementById('scores');

// -------------- WIP ----------------
// Testing Data
allPlayers[0].score = 550;
allPlayers[1].score = 50;
allPlayers[2].score = 120;
allPlayers[3].score = 350;


// Render all the table info
function renderTable(){
  // the `th` values
  var tableHeadValues = ['Name', 'Score'];

  // Define the head of the table
  var parentHead = document.createElement('thead');
  parentElement.appendChild(parentHead);

  // Render the thead data
  let parentRow = document.createElement('tr');

  // loop through tableHeadValues
  for(let i = 0; i < tableHeadValues.length; i++){
    var tableHead = document.createElement('th');
    tableHead.textContent = tableHeadValues[i];
    parentRow.appendChild(tableHead);
  }
  parentHead.appendChild(parentRow);

  // Render the table body
  var parentBody = document.createElement('tbody');
  parentElement.appendChild(parentBody);

  //Loop through each object in the all players array.
  for(let i = 0; i < allPlayers.length; i++){
    parentRow = document.createElement('tr');
    var tableData = document.createElement('td');
    tableData.textContent = allPlayers[i].name;
    parentRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.textContent = allPlayers[i].score;
    parentRow.appendChild(tableData);
    parentBody.appendChild(parentRow);
  }
}

// Sort the allPlayers array by score.
allPlayers.sort((a, b) => {
  if(a.score < b.score){
    return 1;
  } else {
    return -1;
  }
});

// Call the renderTable
renderTable();
