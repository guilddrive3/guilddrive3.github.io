"use strict";
/* global require    */

const assert = require("assert");

	/* 5. write functions executor, add, and mult as defined by the test below */
describe("executor", function(){
    it ("tests add", function(){
        assert.strictEqual(executor(add, 5, 10), 15);
    });
    it("tests mult", function(){
        assert.strictEqual(executor(mult, 5, 10), 50);
    });
});

/**
 * 
 * @param {Function} callback is any function taking 2 arguments
 * @param {number} op1 is a number
 * @param {number} op2 another number
 * @returns {number} apply callback to the operands
 */
function executor(callback, op1, op2){
    return callback(op1, op2);

}

/* eslint-disable */
function mult(op1, op2) { return op1 * op2}
function add(op1, op2) { return op1 + op2}


