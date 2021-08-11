"use strict";
/* global assert pow */
describe("pow", function () {

    it("2 raised to power 3 is 8", function () {
        assert.equal(8, pow(2, 3));
    });

    it("3 raised to power 3 is 27", function () {
        assert.equal(27, pow(3, 3));
    });

});