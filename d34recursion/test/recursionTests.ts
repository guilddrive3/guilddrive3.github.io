/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
//import { assert } from "chai";
import { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, sumTreeValues } from "../src/recursion.js";
let list;
list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
describe("recursion tests", function () {
    it("tests summing by recursion", function () {
        assert.strictEqual(sumTo(5), 15);
        assert.strictEqual(sumTo(10), 55);
    });
    it("tests factorial", function () {
        assert.strictEqual(factorial(5), 120);
        assert.strictEqual(factorial(10), 3628800);
    });
    it("tests fibonacci 10", function () {
        assert.strictEqual(fibonacci(10), 55);
    });
    it("tests fibonacci 30", function () {
        assert.strictEqual(fibonacci(30), 832040);
    });
    it("recursive version prints 1 2 3 4 to console", function () {
        assert.strictEqual(outputList(list), "1 2 3 4 printed to console");
    });
    it("iterative version prints 1 2 3 4 to console", function () {
        assert.strictEqual(outputListLoop(list), "1 2 3 4 printed to console");
    });
    it("recursive version prints 4 3 2 1 to console", function () {
        assert.strictEqual(reverseList(list), "4 3 2 1 printed to console");
    });
    it("loop version prints 4 3 2 1 to console", function () {
        assert.strictEqual(reverseListLoop(list), "4 3 2 1 printed to console");
    });
});

describe("binary tree recursion", function () {
    const tn3 = { value: 3, left: null, right: null };
    const tn5 = { value: 5, left: null, right: null };
    const tn4 = { value: 4, left: null, right: null };
    const tn2 = { value: 2, left: tn4, right: tn5 };
    const binaryTree = { value: 1, left: tn2, right: tn3 };
    
    it("tests sum values of binary tree", function () {
        assert.strictEqual(sumTreeValues(binaryTree), 15);
    });
});
