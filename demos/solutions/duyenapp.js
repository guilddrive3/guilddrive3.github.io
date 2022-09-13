"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors, findIDs, addBook, createBook, scramble }; //add all of your function names here that you need for the node mocha tests

/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to join the titles still (e.g., someArray.join("\n")  */
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];

    for (let book of library) {
        titles.push(book.title);
    }
    titles.sort();
    return titles;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook() {
    const title = document.getElementById("title").value; //retrieves the book title from the title textbox
    const author = document.getElementById("author").value;
    const newID = library.length + 5000; // hack to get a unique id for now
    let book = createBook(title, author, newID);
    console.log(book);
    library.push(book);
    alert("A new book is added to library. \n" + "Title: " + title + "\nAuthor: " + author);
}


/**
 * 
 * @param {String} title is a string title of a book
 * @param {String} author is a string author name of a book
 * @param {Number} newID is a identification of a book
 * @returns {Object} return a book with infos of title, author and library ID
 */
function createBook(title, author, newID) {
    let book = {};
    book.title = title;
    book.author = author;
    book.libraryID = newID;
    return book;
}


function showAuthors() {

    const authors = findAuthors();

    /*need to join the titles still (e.g., someArray.join("\n")  */
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}

/**
 * 
 * @returns {Array} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
function findAuthors() {
    let authors = [];

    for (let book of library) {
        authors.push(book.author);
    }
    authors.sort();
    return authors;


}


function showIDs() {

    const ids = findIDs();

    /*need to join the titles still (e.g., someArray.join("\n")  */
    
    const idString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idString;
}

/**
 * 
 * @returns {Array} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
function findIDs() {
    let ids = [];

    for (let book of library) {
        ids.push(book.libraryID);
    }
    ids.sort();
    return ids;
}

/**
 * 
 * @returns{String} retun a string present all the scrambled words from the titles of books in the library.
 */
function scramble() {

    let a = findTitles();
    let b = a.join(" ");//a string from joining all titles
    let c = b.split(" ");//array of words from string title
    //ordering array c base on the lenght of each words
    c.sort(function (a, b) {
        return a.length - b.length;
    });
    let optString = "";
    for (let i = 0; i < c.length - 1; i++) {
        if (c[i].length < c[i + 1].length) {
            optString += c[i] + "\n";
        } else if (c[i].length === c[i + 1].length) {
            optString += c[i] + " ";
        }
    }
    if (c[c.length - 1].length === c[c.length - 2].length) {
        optString += c[c.length - 1];
    } else {
        optString += c[c.length - 1];
    }
    return optString;
}

function showScramble() {
    let scrambleString = scramble();
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = scrambleString;

}