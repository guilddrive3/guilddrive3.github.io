
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(function(name, index){return index + ": " + name.slice(0,3); });
console.log(lengths); // [5,7,6]

//modify so that it logs array with index: item.length instead of just item.length
console.log("expect [0: 5, 1: 7, 2: 6]", lengths); 
