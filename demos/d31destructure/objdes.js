title: "Menu"
let options = {
    title: "Menu"
  };
  
// let {width = 100, height = 200, title} = options;
// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200

//can pass parameters as an object, and the function destructures them into parameters:
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };
function showMenu({title , items }) {
  // title, items – taken from options,
  // width, height – defaults used
 //console.log( `${title} ${width} ${height}` ); // My Menu 200 100
 console.log( `${title} ${items}` ); // My Menu 200 100
 console.log( items ); // Item1, Item2
}
showMenu(options);
