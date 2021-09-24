"use strict";



function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log(this.name);
  };
  let fluf1= new Rabbit("Fluffy");
  
   
  
  //Do all of these calls do the same thing?  (Draw the object diagram - on scratch paper)
  fluf1.sayHi();
  Rabbit.prototype.sayHi();
  fluf1.__proto__.sayHi();
  