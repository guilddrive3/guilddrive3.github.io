"use strict";
/* global assert pow require */

/* You need the assert and function name declarations to test in node.  

Comment these out when you send it to the browser with the index.html mocha setup page.
*/

const assert = require("assert");  //always need this with node
const myExports = require("./pow.js");  //with node need the name of your file with your functions here
const pow = myExports.pow;  //do this for all of the functions used in the Mocha tests
 

describe("pow", function () {

    it("2 raised to power 3 is 8", function () {
        assert.equal(8, pow(2, 3));
    });

    it("3 raised to power 3 is 27", function () {
        assert.equal(27, pow(3, 3));
    });

});