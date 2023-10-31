console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z"
console.log( Number(null) );        // 1
console.log( Number(undefined) );       // 0

let str = "123.33";
let num = Number(str); // becomes a number 123.33
num = parseFloat(str); // becomes a number 123.33
num = parseInt(str); // becomes a number 123
console.log( +str); // becomes a number 123.33
//another test update
