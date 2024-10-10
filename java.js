// Sélection des éléments du DOM
const book = {
    title: document.querySelector(".title"),
    author: document.querySelector(".author"),
    pages: document.querySelector(".pages"),
    read: document.querySelector("#read"),
    comments: document.querySelector("textarea")
};

const btn = document.querySelector(".btn");
const modality = document.querySelector(".modality");

// Bibliothèque
const myLibrary = [];

const Book = function (title, author, pages, read, comments) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.comments = comments;
};

function addBookToLibrary() {
    const newBook = new Book(
        book.title.value,
        book.author.value,
        book.pages.value,
        book.read.value,
        book.comments.value
    );
    myLibrary.push(newBook);
    display();
}

function display() {
    const lastBook = myLibrary[myLibrary.length - 1];

    const divPrincipal = document.createElement("div");
    const div = document.createElement("div");
    const divBouton = document.createElement("div");
    
    divBouton.classList.add("button-container");
    div.classList.add("scroll-box");
    divPrincipal.classList.add(myLibrary.length - 1);

    const title = document.createElement("div");
    title.innerHTML = "<span>Title: </span>" + lastBook.title;
    div.appendChild(title);

    const author = document.createElement("div");
    author.innerHTML = "<span>Author: </span>" + lastBook.author;
    div.appendChild(author);

    const pages = document.createElement("div");
    pages.innerHTML = "<span>Pages: </span>" + lastBook.pages;
    div.appendChild(pages);

    const read = document.createElement("div");
    read.innerHTML = "<span>Status: </span>" + lastBook.read;
    div.appendChild(read);

    const comments = document.createElement("div");
    comments.innerHTML = "<span>Comments: </span>" + lastBook.comments;
    div.appendChild(comments);

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete-btn");
    del.addEventListener("click", function () {
        removeBook(divPrincipal);
    });

    const mod = document.createElement("button");
    mod.textContent = "Modify";
    mod.classList.add("modify-btn");
    mod.addEventListener("click", function () {
        modifyBook(lastBook, divPrincipal);
    });

    divBouton.appendChild(del);
    divBouton.appendChild(mod);
    divPrincipal.appendChild(div);
    divPrincipal.appendChild(divBouton);

    modality.appendChild(divPrincipal);
}

function removeBook(div) {
    modality.removeChild(div);
    const bookIndex = parseInt(div.classList[0]);
    myLibrary.splice(bookIndex, 1);
}

function modifyBook(bookData, div) {
    book.title.value = bookData.title;
    book.author.value = bookData.author;
    book.pages.value = bookData.pages;
    book.read.value = bookData.read;
    book.comments.value = bookData.comments;

    removeBook(div);
}

function clear() {
    book.title.value = "";
    book.author.value = "";
    book.pages.value = "";
    book.read.value = "";
    book.comments.value = "";
}

btn.addEventListener("click", function (e) {
    e.preventDefault();
    addBookToLibrary();
    clear();
});
