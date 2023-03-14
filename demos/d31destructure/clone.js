//create and log to the console a JSON string from john.  Then create a new instance of john, 
//johnClone, using JSON.parse on the JSON string you created.  Is john === johnClone?

const john = {
    name: "John", 
    surname: "Smith",
    isAdmin: false,
    birthday: {"year": 2000, "month": "February", "day": 3},
    friends: [0,1,2,3]
  };
  john.name = "Samantha";
  const johnJSON = JSON.stringify(john);
  console.log("JohnJSON: ", johnJSON);

  const johnClone = JSON.parse(johnJSON);
  console.log("johnClone: ", johnClone)
  console.log("equal??: ",  johnClone === john);

  john.name = "Bob";
  console.log("johnClone.name: ", johnClone.name);

  const fred = john;
  console.log("fred name: ", fred.name);
  john.name = "Sam";
  console.log("fred name: ", fred.name);
  console.log("johnClone.name: ", johnClone.name);



