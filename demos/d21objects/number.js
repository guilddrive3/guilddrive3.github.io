"use strict";

const numbers = {
    one: 1,
    two: 22,
    three: 333,
    four: 444
}

const properties = ["one", "two", "three", "four"];

for (let property of properties){
    console.log(numbers.property);
    console.log(numbers[property]);
}