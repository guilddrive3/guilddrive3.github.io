"use strict";
/* eslint-disable */

class Counter {
    constructor() {
        this._count = 0;
        this.up = function () {
            return ++this._count;
        };
        this.down = function () {
            return --this._count;
        };
    }
}
  
  let counter = new Counter();

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());