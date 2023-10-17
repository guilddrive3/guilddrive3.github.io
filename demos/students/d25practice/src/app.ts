// let [firstName, , title] = ["Julius", "Caesar", "Consul of the Roman Republic"];
// console.log(title); // Consul


// //can use any “assignables” at the left side.
// type User = {
//     name: string,
//     surname: string
// }
// let user = {} as User;
// [user.name, user.surname] = "Ilya Kantor".split(' ');
// console.log(user.name); // Ilya

//let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(name1); // Julius
// console.log(name2); // Caesar

// // Note that type of `rest` is Array.
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length); // 2

// let [firstName= "f", surname] = [];
// console.log(firstName); // undefined
// console.log(surname); // undefined


// //If we want a “default” value to replace the missing one, we can provide it using =:

// // default values
// let [name2 = "Guest", surname2 = "Anonymous"] = ["Julius"];
// console.log(name2);    // Julius (from array)
// console.log(surname2); // Anonymous (default used)

let title, width, height;

// error in this line
({title, width, height} = {title: "Menu", width: 200, height: 100});

let x;
