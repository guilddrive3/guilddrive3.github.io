"use strict";

/* global assert quiz */
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.   */

// const assert = require("assert");  //always need this with node
// const myExports = require("./grades.js");  //with node need the name of your file with your code here
// const quiz = myExports.quiz;  //do this for all of the objects or functions used in the Mocha tests



describe("grades from quiz", function () {

    it("scoreStudent 10", function () {
        assert.strictEqual(quiz.scoreStudent(10), 1);
    });
    it("scoreStudent 11", function () {
        assert.strictEqual(quiz.scoreStudent(11), 2);
    });
    it("scoreStudent 12", function () {
        assert.strictEqual(quiz.scoreStudent(12), 2);
    });
    it("getAverage", function () {
        assert.strictEqual(+quiz.getAverage().toFixed(3), 1.667);
    });

});
