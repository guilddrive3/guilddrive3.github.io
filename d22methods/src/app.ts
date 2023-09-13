
/**
 * 
* @param {number} initialValue is starting amount
@param {number} increment is amount to add when accumulate called
 * @returns {Accumulator} constructor function
 */
export function Accumulator(initialValue: number, increment: number){
   //1. compiler creates this = {}
   //2. we create and set properties on the this object
   this.currentValue = initialValue;
   this.increment = increment;
   this.accumulate = function(){this.currentValue += this.increment;};
   this.report = function(){ return this.currentValue;};
   //3. compiler returns this

}

/**
 * @returns {Calculator} this is a constructor function
 */
 export function Calculator() {
   //1. compiler creates this = {}
   //2. we create and set properties on the this object
    this.a = 0;
    this.b = 0;
    this.setValues = function(aVal, bVal){
      this.a = aVal;
      this.b = bVal;
    };
    this.sum = function() {return this.a + this.b;};
    this.mul = function(){return this.a * this.b;};
    //3. compiler returns this
     }