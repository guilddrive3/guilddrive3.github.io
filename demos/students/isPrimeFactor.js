function isPrime(num) {
    // if its less than 2 its false
    if (num < 2) {
        return false;
    }
    // then we checking from 2 to n-1 if the number is prime or not
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Second we finding factors of given number
function primeFactors(num) {
    // we check if number is less than 2 we return 0
    if (num < 2) {
        return 0;
    }
    if (num === 2) {
        return [2];
    }
    let result = []; // create an array to store all prime factors of given number
    // we check if number i is factor of n until n is no longer divisible by i mean time we check if number i is prime
    for (let i = 2; i < num; i++) {
        while (num % i === 0) {
            if (isPrime(i)) {
                result.push(i);
            }
            num /= i;
        }
    }
    //checking both condition if number greater than 1 and if number is prime
    if (num > 1 && isPrime(num)) {
        result.push(num);
    }
    return result;
}

console.log(primeFactors(10)); // expected output: [2, 5]
console.log(primeFactors(6936)); // expected output: [2, 3, 17]
console.log(primeFactors(1)); // expected output: 0