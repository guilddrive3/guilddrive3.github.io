//"use strict";
/*eslint-disable */


function User(name){
    console.log("1:" , this);
    this.name = name;
    console.log("2:" , this);
    }
    tina = {};
    const thisUser = User.bind(tina);
    thisUser("Rujuan");
    thisUser("Tina");
    console.log("3: ", tina); 