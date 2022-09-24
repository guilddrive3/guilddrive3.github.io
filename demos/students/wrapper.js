/* eslint-disable no-irregular-whitespace */
"use strict";


let user= {firstName:"Michael",
            lastName: "Gemechu",
            getfullName: function(){
                let fullName = this.firstName + " "+ this.lastName;
                return fullName;
            }};
let userFN = function(){
    console.log(this.getfullName() + " is our student");
};


let fullName = userFN.bind(user);
//fullName();
console.log("fullName() returns :", fullName());


let userFNwrapped = ()=>
    console.log(user.getfullName() + " is our student");


console.log("userFNwrapped() returns :", userFNwrapped());