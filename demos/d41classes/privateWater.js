
/**
 * 
 */
class CoffeeMachine {

    #waterAmount;
    // eslint-disable-next-line require-jsdoc
    constructor(water = 0){
      this.#waterAmount = water;
    }
    // eslint-disable-next-line require-jsdoc
    #myPrivateMethod(){ console.log("I am private, only accessible by other mehods")}
    /**
     * 
     * @returns {number} amount of water in coffee machine
     */
    getWaterAmount() {
      
      return this.#waterAmount;
    }
  
    /**
     * 
     * @param {number} value is amount of water to set for machine
     * @returns  {undefined}
     */
    setWaterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
      this.#myPrivateMethod();
    }
  }
  
  let machine = new CoffeeMachine(50);
  
  machine.setWaterAmount(100);
  
 
  
  // can't access privates from outside of the class
 //console.log("access private:  ", machine.#waterAmount);
  console.log("public access:  ", machine.getWaterAmount());
  