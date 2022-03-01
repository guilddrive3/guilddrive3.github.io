"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//  module.exports = {findTitles,addBook,findAuthors,findIDs }; //add all of your function names here that you need for the node mocha tests


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

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * Event handler to display library authors sorted alphabetically
 * @returns {undefined}
 */
function showAuthor(){

    const authors = findAuthors();

    authors.sort();

    const authorString = authors.join("\n");
    let textArea = document.getElementById("authorDisplayArea");
    textArea.innerHTML = authorString;

}
/**
 * Event handler to display library IDs sorted alphabetically
 * @returns {undefined}
 */
function showLibraryID(){

    const bookId = findIDs();
    bookId.sort();

    const bookIdString = bookId.join("\n");
    let textArea = document.getElementById("idDisplayArea");
    textArea.innerHTML = bookIdString;

}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    for(let books of library){
        titles.push(books.title);
    }
    titles.sort();
    return titles;
}

/**
 * @returns {Array} holding all the authors as element
 */
function findAuthors(){
    let authors = [];
    for(let book of library){
        authors.push(book.author);
    }
    authors.sort();
    return authors;
}


/**
 * @returns {Array} array holding all the ids of the books
 */
function findIDs(){
    let bookIDs = [];
    for(let book of library){
        bookIDs.push(book.libraryID);
    }
    bookIDs.sort();
    return bookIDs;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(title,author,libraryID){
    const newBook = {};
    
    newBook.title = title;
    newBook.author = author;
    newBook.libraryID = libraryID;
    
    library.push(newBook); 
    
    return newBook;
}

/**
 * 
 */
function scramble() {
  const title = findTitles();
  let allWords = [];
  for (let oneTitle of title) {
    const titleArray = oneTitle.split(" ");
    for (let words of titleArray) {
      allWords.push(words);
    }
  }
 
  const asc = allWords.sort((aaa, bbb) => aaa.length - bbb.length);
  let str = asc[0];
  for (let i = 1; i < asc.length; i++) {
    if (asc[i - 1].length === asc[i].length) {
      str += " " + asc[i];
    } else {
      str += "\n" + asc[i];
    }
  }
  let textArea = document.getElementById("displayScrumble");
  textArea.innerHTML = str;
}


/**
 * 
 */
function addBookToLibrary(){
    const newBook ={};
     const title = document.getElementById("title").value; //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
    const  author = document.getElementById("author").value;
    const  libraryID = document.getElementById("libraryID").value;

    newBook.title = title;
    newBook.author = author;
    newBook.libraryID = libraryID;
    
    library.push(newBook); 

  document.getElementById("displayArea").innerHTML = newBook.title + "\n" + newBook.author+"\n" + newBook.libraryID;

}