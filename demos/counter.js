"use strict";

/**
 * 
 * @returns {Function} counter closure
 */
function makeCounter() {
    // instead of:
    // let count = 0
    // eslint-disable-next-line require-jsdoc
    function counter() {
      return counter.count++;  //instead of return count++
    }
    counter.count = 0;
    return counter;
  }
  let counter = makeCounter();
  console.log( counter() ); // 0
  console.log( counter() ); // 1