"use strict";

//create and log to the console a JSON string from john.  Then create a new instance of john, johnClone, using JSON.parse on the JSON string you created.  Is john === johnClone?

const john = {
    name: "John", 
    surname: "Smith",
    isAdmin: false,
    birthday: {"year": 2000, "month": "February", "day": 3},
    friends: [0,1,2,3]
  };

