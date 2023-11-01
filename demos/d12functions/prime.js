/* Write a function named testPrime that returns true when the argument to the function is a prime number, otherwise returns false.
(Best practice to first write the steps in English )
E.g., “defining table”
Now call the function to test if user input is prime or not.
*/
/*
inputs: number to test
outputs: true if number is prime else false
steps: loop from 2 to number -1 and see if it divides with 0 remainder
*/
function testPrime(num) {
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("true: ", testPrime(7));
console.log("false: ", testPrime(100));


