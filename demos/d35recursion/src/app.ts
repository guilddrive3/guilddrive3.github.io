
console.log("expect 1, 3, 5, 7, 9, 11 in console:", oddRecurse(12));

function oddRecurse(n: number): void {
    if (n > 0) {
        oddRecurse(n - 1);
        if (n % 2 === 1) {
            console.log(n);
        }
    }
}
//setTimeout(sayHi(), 3000); function sayHi(){console.log('hello');

/*iterative and recursive solutions to calculate factorial of an integer. 
    factorial (0) = 1
    factorial (n) = n * factorial (n-1) [for n>0]
*/

// function factorial(num: number): number {
//     let total = 1;
//     for (let i = num; i > 0; i = i - 1) {
//         total = total * i;
//     }
//     return total;
// }
// console.log("expect 120: ", factorial(5));

// function fact(num: number): number {
//     //base case
//     if (num === 1) {
//         return 1;
//     } else { //reduction step
//         return num * fact(num - 1);
//     }
// }
// console.log("expect 120: ", fact(5));

console.log("expect 2:", countInstances(" abc def abc", "b"));

// Find length of a String recursively, without using length property
function countInstances(str: string, letter: string): number {
    if (str === "")
        return 0;
    else if (str[0] === letter) {
        //add 1 if letter equals str[0]
        return 1 + countInstances(str.substr(1), letter);
    } else {
        return countInstances(str.substr(1), letter);
    }

}