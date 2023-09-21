

export const calculator = {
    operand1: 0,
    operand2: 0,
    setValues: function(aValue: number, bValue: number){
        this.operand1 = aValue;
        this.operand2 = bValue;
    },
    sum: function(){return this.operand1 + this.operand2;},
    mul: function(){return this.operand1 * this.operand2;}

};  // implement this

