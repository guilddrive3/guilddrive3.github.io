"use strict";

class CoffeeMachine {

    #waterAmount = 0;  //had to add this to .eslintrc.json "parserOptions" : {..., "ecmaVersion": 2022}
  
    getWaterAmount() {
      return this.#waterAmount;
    }
  
    setWaterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.setWaterAmount(100);
  
 
  
  // can't access privates from outside of the class

  console.log(machine.getWaterAmount());
