/* eslint-disable require-jsdoc */
let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

function Calculator(){
    this.calculate = function(str){ //parse the string and calc the result
        const inputs = str.split(" ");
        const firstNum = +inputs[0];
        const op = inputs[1];
        const secondNum = +inputs[2];

        const result = this[op](firstNum, secondNum);
        return result;
    };
    this["+"] = function(num1, num2){return num1 + num2;};
    this.addMethod = function(operator, func){
        //this.cube = function(arg){return arg * arg * arg;}
        this[operator] = func;
    };
    
}
