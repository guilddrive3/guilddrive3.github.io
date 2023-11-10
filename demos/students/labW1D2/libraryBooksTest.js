"use strict";
/* global assert findTitles findAuthors findIDs addBook */
/*
Write a JavaScript program that will accept title, author, and libraryID values from an HTML page and create new book objects for each entry.  
•	Before creating the webpage first write and test the following JavaScript functions:
o	addBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, which will be represented as a global array named libraryBooks.  addBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.

*/

describe("library", function () {

    //This should be used as the "library database" for testing.
    // let library = [
    //     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    //     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    //     { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
    // ];

    const titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];
    const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
    const ids = [1254, 3245, 4264];


    it("find titles", function () {
        assert.deepEqual(findTitles(), titles);
    });

    it("find authors", function () {
        assert.deepStrictEqual(findAuthors(), authors);
    });

    it("find ids", function () {
        assert.deepStrictEqual(findIDs(), authors);
    });

    it("add book", function () {
        const newBook = {title: "My New Book", author: "Me Too", libraryID: 1144};
        const newIDs = ids.push(1144);
        assert.deepStrictEqual(addBook(newBook), newBook);
        assert.deepStrictEqual(findIDs(), newIDs);
    });

});