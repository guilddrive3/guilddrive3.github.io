/* comment out the import assert line when running in the browser */
import assert from "node:assert/strict"; 

import { Student, Teacher } from "./teacher.js";


describe("test inheritance from Person", function () { 

    it("student inheritance", function () {
        const john = new Student();
        john.initialize("John", 25);
        assert.strictEqual(john.learn("Inheritance"), "John just learned Inheritance");
    });
    it("teacher inheritance", function () {
        const bob = new Teacher();
        bob.initialize("Bob", 25);
        assert.strictEqual(bob.teach("Physics"), "Bob is now teaching Physics");
    }); 

});

