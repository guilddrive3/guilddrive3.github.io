"use strict";

const user = {name: "bob",
                loginOk: function(login){
                    if (login === this.name){
                        return true;
                    } else {
                        return false;
                    }
                }
            };

//const anything = user.loginOk.bind(user); 
const anything = function(login){ return user.loginOk.call(user, login);}; 

console.log("expect true: ", user.loginOk("bob"));
console.log("anything is: ", anything);
console.log("still expect true: ", anything("bob"));
