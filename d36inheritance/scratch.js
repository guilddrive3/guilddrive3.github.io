"use strict";
/* eslint-disable */
const honda = {};

honda.__proto__ = {x: 1};

function Obj1(){};
function Obj2(){};

Obj1.prototype.__proto__ = Obj2.prototype;

