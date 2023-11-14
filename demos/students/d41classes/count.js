"use strict";
/* Rewrite the following as a class.  Remember that classes do not allow local variables outside methods. Use 
the _ convention to indicate a property that should not be directly accessed. */
/* eslint-disable */
/**
 * 
 */
class Counter {
    constructor(){
        this._count = 0;
    }

  up() {
    return ++this._count;
  };
  down() {
    return --this._count;
  };
}

let counter = new Counter();

console.log( counter.up() ); 
console.log( counter.up() ); 
console.log( counter.down() ); 