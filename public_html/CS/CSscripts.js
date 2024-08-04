function generateGridVisualFrom2DArray(arr) {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement('table');
  tbl.style = {};
  const tblBody = document.createElement('tbody');

  // creating all cells
  for (let i = 0; i < arr.length; i++) {
    // creates a table row
    const row = document.createElement('tr');

    for (let j = 0; j < arr[0].length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement('td');
      cell.classList.add('grid-visual-cell');
      const cellText = document.createTextNode(arr[i][j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute('border', '1');

  document.querySelector('#grid-visual').appendChild(tbl);
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
