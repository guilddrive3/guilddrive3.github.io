"use strict";

//create and log to the console a json string from john.  Then create a new instance of john, johnClone, using JSON.parse.  Is john === johnClone?


const john = {
    name: "John", 
    surname: "Smith",
    isAdmin: false,
    birthday: {"year": 2000, "month": "February", "day": 3},
    friends: [0,1,2,3]
  };

  const jsonString = JSON.stringify(john);
  console.log("jsonString is: ", jsonString);

  const johnClone = JSON.parse(jsonString);
  console.log("johnClone is: ", johnClone);

  console.log(john === johnClone);
  

  