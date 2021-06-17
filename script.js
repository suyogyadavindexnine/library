let myLibrary = [];

function Book(name,author,no,read) {
    this.name = name;
    this.author = author;
    this.no = no;
    this.read = read;
    this.info = function () {
        let tempread="Not Read Yet";
        if (read) {
            tempread = "Already Read"
        }
        return tempread;
    }
}

const addbookbtn = document.querySelector("#addbookbtn");
addbookbtn.onclick = () => { addBookToLibrary(); }

initialBookShelf();

function initialBookShelf(params) {
    let book1 = new Book("Who Moved My Cheese?","Spencer Johnson",120,true);
    myLibrary.push(book1);
    let book2 = new Book("The Magic of Thinking Big","David J. Schwartz",350,false);
    myLibrary.push(book2);
    let book3 = new Book("Think & Grow Rich","Napolean Hill",450,false);
    myLibrary.push(book3);
    let book4 = new Book("See You At The Top","Zig Ziglar",400,false);
    myLibrary.push(book4);
    updateBookShelf();
}

function addBookToLibrary() {
    const bookname = document.querySelector("#bookname").value;
    const authorname = document.querySelector("#authorname").value;
    const numberofpages = document.querySelector("#numberofpages").value;
    const read = document.querySelector("#read").checked;
    const book = new Book(bookname,authorname,numberofpages,read);
    myLibrary.push(book);
    console.log(myLibrary);
    updateBookShelf();
    document.querySelector("#bookname").value = "";
    document.querySelector("#authorname").value = "";
    document.querySelector("#numberofpages").value = "";
    document.querySelector("#read").checked = false;
}

function updateBookShelf() {
    const bookshelf = document.querySelector("#bookshelf");
    bookshelf.innerHTML = "";
    let i=0;
    myLibrary.forEach(book => {
        const div = document.createElement('div');
        div.className = "book";
        div.innerHTML = `<h4>Book : ${book.name}<br>
            Author : ${book.author}<br>
            Pages : ${book.no}<br>
            ${book.read ? "Already Read" : "Not Yet Read" }<br>
        </h4>
        <div style="margin-bottom: 10px;">
            <button id="${i}" onclick="markAs(this.id)" style="width: 100px; height: 50px; background-color: greenyellow; color: black; margin-bottom: 20px;" >${book.read ? "Mark Unread" : "Mark Read" }</button>
            <button id="${i}" onclick="deleteBook(this.id)" style="width: 100px; height: 50px; background-color: pink; color: black; margin-bottom: 20px;" >Delete</button>
        </div>`
        bookshelf.appendChild(div); 
        i++;
    });
}

function markAs(id) {
    console.log("mark as read called with id "+id);
    console.log(myLibrary[id].read);
    myLibrary[id].read = !myLibrary[id].read;
    console.log(myLibrary[id].read);
    myLibrary.forEach(element => {
        console.log(element);
    });
    updateBookShelf();
}

function deleteBook(id) {
    console.log("delete book called with id "+id);
    console.log(myLibrary[id]);
    myLibrary.splice(id,1);
    updateBookShelf();
}