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

console.log( foo1() );

console.log( foo2() );

console.log( foo3() );

console.log( foo4() );