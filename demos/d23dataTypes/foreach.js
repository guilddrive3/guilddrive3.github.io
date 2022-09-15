"use strict";
/* eslint-disable */
/*  use forEach to log all the even elements of an array to the console */


[1, 5, 16, 3, 108].forEach(element => { if (element % 2 === 0) console.log(element); });

[1, 5, 16, 3, 108].forEach(logEvens);

function logEvens(element) {
    if (element % 2 === 0) console.log(element);
}
