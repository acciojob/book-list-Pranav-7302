//your JS code here. If required.
let heading = document.createElement('h1');
heading.innerText = 'MyBookList';
document.body.appendChild(heading);
heading.style.textAlign = 'center';


let div = document.createElement('div');
div.className = 'form-group';
document.body.appendChild(div);


let labelTitle = document.createElement('label');
labelTitle.innerText = 'Title';
div.appendChild(labelTitle);
let br1 = document.createElement('br');
div.appendChild(br1);
let inputTitle  = document.createElement('input');
inputTitle.id = 'title';
div.appendChild(inputTitle);
inputTitle.style.width = '100%';
let br2 = document.createElement('br');
div.appendChild(br2);



let labelAuthor = document.createElement('label');
labelAuthor.innerText = 'Author';
div.appendChild(labelAuthor);
let br3 = document.createElement('br');
div.appendChild(br3);
let inputAuthor = document.createElement('input');
inputAuthor.id = 'author';
div.appendChild(inputAuthor);
inputAuthor.style.width = '100%';
let br4 = document.createElement('br');
div.appendChild(br4);


let labelIsbn = document.createElement('label');
labelIsbn.innerText = 'ISBN#';
div.appendChild(labelIsbn);
let br5 = document.createElement('br');
div.appendChild(br5);
let inputIsbn   = document.createElement('input');
inputIsbn.id = 'isbn';
div.appendChild(inputIsbn);
inputIsbn.style.width = '100%';
let br6 = document.createElement('br');
div.appendChild(br6);


let button = document.createElement('button');
button.id = 'submit';
button.innerText = 'Add Book';
div.appendChild(button);


let table = document.createElement('table');
table.className = 'table table-striped';
table.style.border = '1px solid black';
table.style.width = '100%';
table.style.borderCollapse = 'collapse';
document.body.appendChild(table);

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
th4.innerText = 'Action';
tr.appendChild(th4);
let tbody = document.createElement('tbody');
tbody.className = 'book-list';
table.appendChild(tbody);

    button.addEventListener('click', function(e){
    e.preventDefault();

    if (inputTitle.value.trim() === "" || inputAuthor.value.trim === "" || inputIsbn.value.trim() === "") {
        alert("All fields are required!");
        return; // Stop execution if any field is empty
    }

    let tr = document.createElement('tr');
    tr.style.textAlign = 'center';
    tbody.appendChild(tr);

    let td1 = document.createElement('td');
    td1.innerText = title.value;
    tr.appendChild  (td1);

    
    let td2 = document.createElement('td');
    td2.innerText = author.value;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerText = isbn.value;
    tr.appendChild(td3);
    tbody.appendChild(tr);

    let td4 = document.createElement('td');
    td4.innerHTML = '<button>X</button>';
    td4.style.color = 'red';
    tr.appendChild(td4);

    td4.addEventListener('click', function(e){
        tr.remove();
    });

    inputTitle.value = "";
    inputAuthor.value = "";
    inputIsbn.value = "";   
    });