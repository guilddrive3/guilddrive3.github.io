"use strict";

/* global assert Student, Teacher */
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.    */

const assert = require("assert");  //always need this with node
const myExports = require("./teacher.js");  //with node need the name of your file with your functions here
const Student = myExports.Student;  //do this for all of the functions used in the Mocha tests
const Teacher = myExports.Teacher; 


describe("test inheritance from Person", function () { 

    it("student inheritance", function () {
        const john = new Student();
        john.initialize("John", 25);
        assert.strictEqual(john.learn("Inheritance"), "John just learned Inheritance");
    });
    it("teacher inheritance", function () {
        const bob = new Teacher();
        bob.initialize("Bob", 25);
        assert.strictEqual(bob.teach("Physics"), "Bob is now teaching Physics");
    }); 

});

