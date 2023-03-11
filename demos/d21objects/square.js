 const numbers = {
    one: Math.pow(3,2) + "apple",
    two: numbers.one,
    three: 333,
    four: 444,
    compute: function(){return this.three * this.four}, 
};

const propertyOrder = ["one", "one", "three", "two" ];
/*
//write a for loop to print out the values of the properties according to the property names in the propertyOrder array.  You must use the properties array to access the values.  You cannot directly write console.log(numbers.one)  …
*/

//for (const prop of propertyOrder){
    //console.log(numbers[prop]);
    console.log(numbers.three);
    console.log(numbers[propertyOrder[1]]);
//}



