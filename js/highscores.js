'use strict';

var parentElement = document.getElementById('scores');

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

function callAndSortLocalStorage(){
  getLocalStorage();

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
}

callAndSortLocalStorage();
