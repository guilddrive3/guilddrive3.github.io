"use strict";

//What will appear in the console?

/**
 * 
 * @param {*} name is nam
 * @returns {Object} if called with new
 */
function User(name){
    console.log("1:" , this);
    this.name = name;
    console.log("2:" , this);
    }
    const tina = {};
    const thisUser = User.bind(tina);
    thisUser("Rujuan");
    thisUser("Tina");
    console.log("3: ", tina); 