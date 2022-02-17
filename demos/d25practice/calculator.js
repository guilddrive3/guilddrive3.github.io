"use strict";

/* 6.	Create an object calculator with two methods using an object literal:
    setValues(operand1, operand2) takes two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.
    */
let calculator1 = {
  value1: 0,
  value2: 0,
  sum: function(){return this.value1 + this.value2;},
  mul: function(){return this.value1 * this.value2;},
  setValues: function(v1, v2){this.value1 = v1;  this.value2 = v2;}
};
calculator1.setValues(5, 10);
console.log( "expect 15 : ", calculator1.sum() ); 
console.log("expect 50 : ", calculator1.mul() );

/* 7.	Create an object calculator with two methods using a constructor function: */
const calculator2 = new Calculator();

calculator2.setValues(5, 10);
console.log( "expect 15 : ", calculator2.sum() ); 
console.log("expect 50 : ", calculator2.mul() );
/**
 * 
 * @returns {Object} it is a constructor function
 */
function Calculator(){
    this.value1 = 0;
    this.value2 = 0;
    this.sum = function(){return this.value1 + this.value2;},
    this.mul = function(){return this.value1 * this.value2;},
    this.setValues = function(v1, v2){this.value1 = v1;  this.value2 = v2;};



}
