//https://jsfiddle.net/keithlevi/pyhtbroL/23/

let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log( numbers[1] ); // 1

// eslint-disable-next-line quotes
let user3 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user3 = JSON.parse(user3);
console.log( user3.friends[2] ); // 2
user3.loc = {lat:22, long: 99}

let user = {
  name: "John Smith",
  age: 55,
  friend: user3,
  favNums: numbers,
};
let json2 = JSON.stringify(user);
console.log(json2);
let user2 = JSON.parse(json2); //user2 now is a "deep clone" of user
console.log(user2);
user2.friend.age = 85;
user2.friend.loc.lat = 123;
console.log(user3.age);
console.log(user3.loc.lat);




  





