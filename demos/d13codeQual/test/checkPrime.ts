//basic example of using mocha (test code in same file)

import { assert } from "chai"

function checkPrime(num: number): boolean {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

describe("checkPrime returns true if argument is prime", function () {

    it("37 is prime", function () {
        assert.strictEqual(checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(checkPrime(77), false);
    });
});
