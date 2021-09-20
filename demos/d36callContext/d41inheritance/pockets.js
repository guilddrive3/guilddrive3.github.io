"use strict";
/* eslint-disable */

let head = {
        glasses: 1
    };
    let table = {
        pen: 3
    };
    let bed = {
        sheet: 1,
        pillow: 2
    };
    let pockets = {
        money: 2000
    };

    pockets.__proto__ = bed;
    bed.__proto__ = table;
    table.__proto__ = head;
    
    console.log("expect 3: ", pockets.pen);
    console.log("expect 1: ", bed.glasses);