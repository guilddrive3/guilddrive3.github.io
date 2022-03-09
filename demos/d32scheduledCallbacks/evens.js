"use strict";
/* 
write a function, multiplyEvens, that can be called with any number of arguments and returns the product of the even arguments
do first using the arguments object
then using …rest parameter
*/


console.log("expect 48: ", multiplyEvens(1, 6, 3, 4, 17, 2));

/**
 * 
 * @returns {number} product of even arguments 
 */
// function multiplyEvens(){
//     let prod = 1;
//     for (const arg of arguments){
//         if (arg % 2 === 0) {         
//             prod = prod * arg;
//         }
//     }
//     return prod;
// }

/**
 * 
 * @returns {number} product of even arguments 
 */
function multiplyEvens(...args){
    let prod = 1;
    for (const arg of args){
        if (arg % 2 === 0) {         
            prod = prod * arg;
        }
    }
    return prod;
}

// let a, b, c, d, e;  
// a = [1,2,3];  
// b = "dog";  
// c = [42, "cat"];  

//  d = a.concat(b, c); // [1, 2, 3, “dog”, 42, “cat”]
//  console.log("d is: ", d);
//  console.log("a is: ", a);

 let a, b;  
a = {x:1, y: {a:100,b:200}, z:3};
b = { ...a };
console.log(b) // {x:1, y:{a:100,b:200}, z:3}
b.x = 100;
b.y.a = 66;
console.log(a) // {x:1, y: {a:66,b:200}, z:3} -- not a deep clone since b.y.a changes a.y.a
console.log(b) // {x:1, y:{a:66,b:200}, z:3}

