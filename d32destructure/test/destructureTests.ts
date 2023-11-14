/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { topSalary } from "../src/destructure.js";
import {classrooms, collectRoomNumbers, collectRoomsAndCapacities , collectLabeledRoomCaps ,
    countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge} from '../src/classrooms.js';

 
    
/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
describe("topSalary", function() {
    it("returns top-paid person", function() {
      const salaries1 = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
      assert.equal( topSalary(salaries1), "Pete" );
    });

    it("returns top-paid of salaries2", function() {
      const salaries2 = {
        "John": 100,
        "Pete": 300,
        "Mary": 250,
        "Bob": 301,
        "Alice": 400,
        "Sally": 250
      };
      assert.equal( topSalary(salaries2), "Alice" );
    });    
  
    it("returns none for the empty object", function() {
        console.log("topsalary: ", topSalary({}) );
      assert.strictEqual( topSalary({}), "none");
    });
  });


describe("classroom embedded objects", function() {
  it("collectRoomNumbers ", function() {
    assert.deepEqual( collectRoomNumbers(), [101, 102, 103]);
  });
  it("collectRoomsAndCapacities", function() {
    assert.deepEqual( collectRoomsAndCapacities(), ["101::30", "102::25", "103::35"]);
  });
  it("collectLabeledRoomCaps", function() {
    assert.deepEqual( collectLabeledRoomCaps(), [{roomNumber: 101, capacity: 30}, {roomNumber: 102, capacity: 25}, {roomNumber: 103, capacity: 35}]);
  });
  it("countStudentsInClassroom", function() {
    assert.equal( countStudentsInClassroom(classrooms, 103), 3);
    assert.equal( countStudentsInClassroom(classrooms, 102), 2);
  });

  it("findClassroomsWithCapacity", function() {
    const capacity30 = findClassroomsWithCapacity(classrooms, 30);
    assert.strictEqual( capacity30.length, 2 );
    assert.strictEqual( capacity30[0].roomNumber, 101 );
  });
  it("findStudentsOlderThan", function() {
    const olderThan18 = findStudentsOlderThan(classrooms, 18);
    assert.strictEqual( olderThan18.length, 4 );
    assert.strictEqual( olderThan18[0].name, "Bob" );
  });
  it("averageStudentAge", function() {
    assert.equal( averageStudentAge(classrooms), 18.5);
  });

});