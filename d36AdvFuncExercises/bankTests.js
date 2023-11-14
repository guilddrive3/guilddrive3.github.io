/* comment out the import assert line when running in the browser */
//import assert from "node:assert/strict"; 

import { makeBank } from "./bank.js";

describe("bank tests", function () {

  const bank = makeBank();
    it("bankBalance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });

    it("transactionsDB is private", function () {
        assert.strictEqual(bank.transactionsDB in bank, false);
    });
});



