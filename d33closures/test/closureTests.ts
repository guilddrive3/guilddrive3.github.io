/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { inArray, inBetween, makeArmy } from "../src/closures.js";
import { createShoppingCart } from "../src/shoppingCart.js";



describe("inArray", function () {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  it("returns the filter for values in array", function () {
    const filter1To7 = inArray(arr);
    assert.strictEqual(filter1To7(5), true);
    assert.strictEqual(filter1To7(0), false);

  });

  it("tests inArray works with Array.filter", function () {
    const filter1To7 = inArray(arr);
    const arr2 = [0, 5, 10, 6, 100];
    assert.deepEqual(arr2.filter(filter1To7), [5, 6]);
  });
});

describe("inBetween", function () {

  it("returns the filter for values between", function () {
    const filter3to6 = inBetween(3, 6);
    assert.strictEqual(filter3to6(5), true);
    assert.strictEqual(filter3to6(0), false);
  });

  it("tests inBetween works with Array.filter", function () {
    const filter3to6 = inBetween(3, 6);
    const arr2 = [0, 4, 5, 10, 6, 100];
    assert.deepEqual(arr2.filter(filter3to6), [4, 5, 6]);
  });
});




describe("army", function () {

  let army = makeArmy();


  it("army[0] shows 0", function () {
    const shooter0 = army[0]();
    assert.strictEqual(shooter0, 0);
  });


  it("army[5] shows 5", function () {
    const shooter5 = army[5]();
    assert.strictEqual(shooter5, 5);
  });

});

describe("Shopping Cart", function () {

  const myCart = createShoppingCart();
  myCart.addItem('Shirt', 20);
  myCart.addItem('Jeans', 50);

  it("getTotal", function () {
    assert.strictEqual(myCart.getTotal(), 70);
  });


  it("remove items", function () {
    myCart.removeItem('Shirt');
    myCart.removeItem('Shoes');
    assert.strictEqual(myCart.getTotal(), 50);
  });
});