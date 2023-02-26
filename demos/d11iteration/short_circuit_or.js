"use strict";

const x=false;
const y = x || 5;
console.log(y);

const foo=true;
const z = foo || 10;
console.log(z);

 const bar = foo && 5;
console.log(bar);

const zero=0;
const conj2 = zero && 10;
console.log(conj2);

