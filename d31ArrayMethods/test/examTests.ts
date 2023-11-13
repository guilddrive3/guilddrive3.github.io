/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { firstLast, replaceEnds, higho, square, absVal, } from "../src/exam.js";
import { calculateDailyTotalDuration,getAllSessions } from "../src/exam.js";


describe("exam2 coding", function () {

    it("firstLast", function () {
        const names = ["Fred Smith", "Carl Lindstrom"];
        const output = [{ firstName: 'Fred', lastName: 'Smith' }, { firstName: 'Carl', lastName: 'Lindstrom' }]
        assert.deepEqual(firstLast(names), output);
    });



    it("replaceEnds 6124", function () {
        //Use slice and splice to write TypeScript code for the replaceEnds function.  replaceEnds should be a pure function.
        //first two number arguments replace the first and second elements of the array, last two number arguments replace the 
        //last two elements of the array
        const arr = [5, 4, 3, 2, 1, 0];
        const result = [6, 1, 3, 2, 4]
        assert.deepEqual(replaceEnds(arr, 6, 1, 2, 4), result);
        assert.deepEqual(arr, [5, 4, 3, 2, 1, 0]); //original array is unchanged
    });
    it("replaceEnds 0 100", function () {
        //Use slice and splice to write TypeScript code for the replaceEnds function.  replaceEnds should be a pure function.
        //first two number arguments replace the first and second elements of the array, last two number arguments replace the 
        //last two elements of the array
        const arr = [5, 4, 3, 2, 1, 0];
        const result2 = [10, 9, 3, 2, 8, 7];
        assert.deepEqual(replaceEnds(arr, 10, 9, 8, 7), result2);
        assert.deepEqual(arr, [5, 4, 3, 2, 1, 0]); //original array is unchanged
    });

    //Implement functions higho, square, and cube.  
    //higho takes a function and a number as arguments and returns the result of the function called on the number.
    it("tests square", function () {
        const numArr1 = [1, -2, 3];
        const numArr2 = [-1, 4, -10];
        assert.deepEqual(higho(square, numArr1), [1, 4, 9]);
        assert.deepEqual(higho(square, numArr2), [1, 16, 100]);
    });
    it("tests absVal", function () {
        const numArr1 = [1, -2, 3];
        const numArr2 = [-1, 4, -10];
        assert.deepEqual(higho(absVal, numArr1), [1, 2, 3]);
        assert.deepEqual(higho(absVal, numArr2), [1, 4, 10]);
    });

});


describe("fitness tracking", function () {
    // Implement a fitness tracking application that allows users to monitor their daily workout statistics. 
    // •	define types for Session and Day
    // •	should work for a dailyRecord with 1 or more day objects.


    const session1 = { userId: 1, duration: 60 };
    const session2 = { userId: 2, duration: 45 };
    const session3 = { userId: 2, duration: 30 };
    const session4 = { userId: 3, duration: 15 };
    const session5 = { userId: 3, duration: 75 };
    const day1 = { sessions: [session1, session2], date: "01/10/2022" };
    const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
    const dailyRecord = [day1, day2];

    //     Utilize a for..of loop in a function, calculateDailyTotalDuration, to find the total workout duration for a given day. 
    it("calculateDailyTotalDuration", function () {
        assert.strictEqual(calculateDailyTotalDuration(day2.sessions), 120)
    });

    // Develop a function, calculateTotalDuration, using a for..of loop, to find the total workout duration across all 
    //days in the dailyRecord array. Utilize the previously defined calculateDailyTotalDuration function. 
    it("calculateTotalDuration", function () {
        assert.deepEqual(calculateDailyTotalDuration(day2.sessions), 225);
    });

    //Write a function getAllSessions that will use the concat method to return an array with all  the sessions in the dailyRecord.
    const allSessions = [session1, session2, session3, session4 , session5];
    it("calculateDailyTotalDuration", function () {
        assert.deepEqual(getAllSessions(dailyRecord), allSessions);
    });

});