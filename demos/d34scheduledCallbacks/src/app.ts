
/* write a function, multiplyEvens
can be called with any number of arguments 
returns the product of the even arguments
 hint: …rest parameter
*/

console.log("multiplyEvens expect 48: ", multiplyEvens(1, 6, 3, 4, 17, 2));

function multiplyEvens(...nums: number[]): number {
    let product = 1;
    for (const num of nums) {
        if (num % 2 === 0) {
            product *= num;
        }
    }
    return product;
}
