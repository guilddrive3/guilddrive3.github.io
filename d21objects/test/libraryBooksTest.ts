/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"

import {Book, library, findTitles, findAuthors , findIDs, createBook} from "../src/book.js";  //import all of the app.js functions used in the Mocha tests


/*
Write a JavaScript program that will accept title, author, and libraryID values from an HTML page and create new book objects for each entry.  
•	Before creating the webpage first write and test the following JavaScript functions:
o	createBook, which will take title, author, and libraryID as inputs.  It will create and return a new book object 
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.

*/

describe("library", function () {

    //This should be used as the "library database" for testing--included in app.js
    // let library: Book[] = [
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
        assert.deepEqual(findAuthors(), authors);
    });

    it("find ids", function () {
        assert.deepEqual(findIDs(), ids);
    });

    it("create book", function () {
        const newBook = {title: "My New Book", author: "Me Too", libraryID: 1144};
        assert.deepEqual(createBook("My New Book",  "Me Too",  1144), newBook);
    });

    it("create book and save to library", function () {
        //assumes createBook was called before this test--e.g., in prior it test
        const TEST_LIB: Book[] = [
            { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
            { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
            { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 },
            { title: "My New Book", author: "Me Too", libraryID: 1144 }
        ];
        assert.deepEqual(library, TEST_LIB);

    });

});