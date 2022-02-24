"use strict";
/* eslint-disable */
function bar(){
    return 1;
}
function foo1(){
    const barResult = bar();
    return barResult;
}
function foo2(){
    return bar();
}
function foo3(){
    const barResult =  console.log("foo3: ", bar());
}
function foo4(){
    const consoleLogResult = console.log("foo4: ", 1);
    return consoleLogResult;
}
console.log( foo1() ); //1
console.log( foo2() ); //1
console.log( foo3() ); //undefined
console.log( foo4() ); //undefined