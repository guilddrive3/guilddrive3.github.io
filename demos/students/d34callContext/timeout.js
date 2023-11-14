"use strict";

const abc = {
  a: 1,
  b: 2,
  add: function() {
    console.log("1+2 = 3?", this.a + this.b);
  }
}
console.log("regular call to add: ");
abc.add();
/* use add inside a timeout */
console.log("wait 2 seconds to call: ");
setTimeout(abc.add, 2000);