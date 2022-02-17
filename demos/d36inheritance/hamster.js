"use strict";

let hamster = {
    stomach: [],
  
    eat(food) {
        //first time will inherit stomach [], then creates the property in the this object
        //probably simpler and more obvious to put the stomach in individual objects when construct them if want them to have own stomach
        //2/16/2022
      const [...beforeStomach] = this.stomach;  //copy of what is in stomach before eat
      beforeStomach.push(food);
      // assign to this.stomach instead of this.stomach.push
      this.stomach = beforeStomach;
    }
  };
  
  let speedy = {
     __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Speedy one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  console.log( lazy.stomach ); // <nothing>

  speedy.eat("orange");
  console.log( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  console.log( lazy.stomach ); // <nothing>