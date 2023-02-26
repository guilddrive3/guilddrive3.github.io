"use strict";
/* global assert pow require */

/* You need the assert and function name declarations to test in node.  

Comment these out when you send it to the browser with the index.html mocha setup page.


const assert = require("assert");  //always need this with node
const myExports = require("./pow.js");  //with node need the name of your file with your functions here
const pow = myExports.pow;  //do this for all of the functions used in the Mocha tests
 */

//import assert from "assert";  // = require("assert");  //always need this with node
import {assert} from "https://unpkg.com/chai@4.1.2/chai.js";
//import myExports = from "./pow.js";  //with node need the name of your file with your functions here
import {pow} from "./pow.mjs";

describe("pow", function () {
    it("2 raised to power 3 is 8", function () {
        assert.equal(8, pow(2, 3));
    });

    it("3 raised to power 3 is 27", function () {
        assert.equal(27, pow(3, 3));
    });

});
//https://medium.com/dailyjs/running-mocha-tests-as-native-es6-modules-in-a-browser-882373f2ecb0
//2/22/2023kl - inspect again, looks like esm will work, just have to use the import assert in node, but not in browser