"use strict";

// animal has methods
let animal = {
    walk: function() {
      if (!this.isSleeping) {
        console.log(`I walk`);
      }
    },
    sleep: function() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  animal.sleep();
  
  console.log(rabbit.isSleeping); // true
  console.log(animal.isSleeping); // undefined (no such property in 