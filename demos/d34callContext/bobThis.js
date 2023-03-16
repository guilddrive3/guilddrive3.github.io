

function foo() {
    //this.apple = "pie";
    console.log("inside function foo: ", this);
}
const bob = {
    name: "Bob",
    log: function () {
        console.log(this);
    }
};

bob.log();//log() is called by the object, bob 
foo(); //foo() is called by global or window object 
console.log("this outside object: ", this); // this is window in browser ({} in node)




//https://stackoverflow.com/questions/34838659/the-this-keyword-behaves-differently-in-nodejs-and-browser
/* [strict mode] undefined in functions or outside functions
[non strict mode:]  In Node.js, outside the functions, this is an empty object, as the code is wrapped in a function by Node, to create it's own execution 
context for every module (script file), while inside the functions, because they are called with no specified execution 
context, this is the Node GLOBAL object 
Change file extension to .cjs to run it in non-strict mode */
