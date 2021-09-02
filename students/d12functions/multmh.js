"use strict";
/* eslint-disable */

function sumDigits(num1){
    let str = num1+"";
    let sum = 0;
    for(let i = 0; i<str.length; i++){
        sum += +str.charAt(i);
    }
    return sum;
    }
    function multDigits(num2){
        let str = num2+"";
    let product = 1;
    for(let i = 0; i<str.length; i++){
        product *= +str.charAt(i);
    }
    return product;
    }
    console.log(sumDigits(1234));
    console.log(sumDigits(102));
    console.log(sumDigits(8));
    console.log(multDigits(1234));
    console.log(multDigits(102));
    console.log(multDigits(8));