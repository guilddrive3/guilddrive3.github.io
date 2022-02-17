"use strict";

/**
 * @returns {undefined}
 */
function sayHi() {
    console.log( "Hello" );
   }
   const myHi = sayHi();
   console.log(myHi);
   console.log( sayHi() ); // shows the function code

   /**
    * 
    * @returns {function} the sayHi function
    */
   function higherOrder() { return sayHi; }
   higherOrder()();
   