// Create heading
let heading = document.createElement('h1');
heading.innerText = 'MyBookList';
document.body.appendChild(heading);
heading.style.textAlign = 'center';

// Create form container
let div = document.createElement('div');
div.className = 'form-group';
document.body.appendChild(div);

// Title input
let labelTitle = document.createElement('label');
labelTitle.innerText = 'Title';
div.appendChild(labelTitle);
div.appendChild(document.createElement('br'));

let inputTitle = document.createElement('input');
inputTitle.id = 'title';
inputTitle.required = true; // ✅ Required field
div.appendChild(inputTitle);
inputTitle.style.width = '100%';
div.appendChild(document.createElement('br'));

// Author input
let labelAuthor = document.createElement('label');
labelAuthor.innerText = 'Author';
div.appendChild(labelAuthor);
div.appendChild(document.createElement('br'));

let inputAuthor = document.createElement('input');
inputAuthor.id = 'author';
inputAuthor.required = true; // ✅ Required field
div.appendChild(inputAuthor);
inputAuthor.style.width = '100%';
div.appendChild(document.createElement('br'));

// ISBN input
let labelIsbn = document.createElement('label');
labelIsbn.innerText = 'ISBN#';
div.appendChild(labelIsbn);
div.appendChild(document.createElement('br'));

let inputIsbn = document.createElement('input');
inputIsbn.id = 'isbn';
inputIsbn.required = true; // ✅ Required field
div.appendChild(inputIsbn);
inputIsbn.style.width = '100%';
div.appendChild(document.createElement('br'));

// Submit button
let button = document.createElement('button');
button.id = 'submit';
button.innerText = 'Add Book';
div.appendChild(button);

// Create table
let table = document.createElement('table');
table.className = 'table table-striped';
table.style.border = '1px solid black';
table.style.width = '100%';
table.style.borderCollapse = 'collapse';
document.body.appendChild(table);

// Table head
let thead = document.createElement('thead');
table.appendChild(thead);

let tr = document.createElement('tr');
tr.style.textAlign = 'center';
tr.style.fontSize = '20px';
tr.style.backgroundColor = 'lightblue';
thead.appendChild(tr);

let th1 = document.createElement('th');
th1.innerText = 'Title';
tr.appendChild(th1);

let th2 = document.createElement('th');
th2.innerText = 'Author';
tr.appendChild(th2);

let th3 = document.createElement('th');
th3.innerText = 'ISBN#';
tr.appendChild(th3);

let th4 = document.createElement('th');
th4.innerText = 'Action'; // ✅ Added correct heading
tr.appendChild(th4);

// Table body
let tbody = document.createElement('tbody');
tbody.id = 'book-list'; // ✅ Added correct ID for Cypress test
table.appendChild(tbody);

// Button click event listener
button.addEventListener('click', function (e) {
    e.preventDefault();

    // Validation check
    if (inputTitle.value.trim() === "" || inputAuthor.value.trim() === "" || inputIsbn.value.trim() === "") {
        alert("All fields are required!");
        return;
    }

    // Create new row
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerText = inputTitle.value;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerText = inputAuthor.value;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerText = inputIsbn.value;
    tr.appendChild(td3);

    // Create delete button
    let td4 = document.createElement('td');
    let delBtn = document.createElement('button');
    delBtn.className = "delete"; // ✅ Cypress test expects this class
    delBtn.innerText = "X";
    td4.appendChild(delBtn);
    tr.appendChild(td4);

    // Append new row to tbody
    tbody.appendChild(tr);

    // Delete event
    delBtn.addEventListener("click", function () {
        tr.remove(); // ✅ Removes the whole row
    });

    // Clear input fields after adding
    inputTitle.value = "";
    inputAuthor.value = "";
    inputIsbn.value = "";
});
