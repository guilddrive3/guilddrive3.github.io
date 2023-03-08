

export const calculator = {
    a: 0,
    b: 0,
    setValues: function(aValue, bValue){
        this.a = aValue;
        this.b = bValue;
    },
    sum: function(){return this.a + this.b;},
    mul: function(){return this.a * this.b;}

};  // implement this

