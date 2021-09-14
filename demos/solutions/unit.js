"use strict";

const unitConverter = {
    isDegrees: true,
    value: 0,
    convert: function () {
        if (this.isDegrees === true) {//change to radians
            this.isDegrees = false;
            this.value = this.value * Math.PI / 180;
        } else {
            this.isDegrees = true;
            this.value = this.value * 180 / Math.PI;
        }
    }
};

/**
 * @returns {Object} this is a constructor
 */
function UnitConverter() {
    this.isDegrees = true;
    this.value = 0;
    this.convert = unitConverter.convert;
}

const unitConverter2 = new UnitConverter();

//rewrite as arrow function
const printMe = () => console.log("hello");

/**
 * 
 * @param {*} id is integer
 * @param {*} name is string
 * @param {*} price is number
 * @param {*} discount is number
 * @param {*} freeShipping is boolean
 * @returns {Object} constructor function
 */
function Item(id, name, price, discount, freeShipping = false) {
    this.id = id,
        this.name = name,
        this.price = price,
        this.discount = discount,
        this.freeShipping = freeShipping,
        this.getFinalPrice = function () {
            return this.price - (this.price * this.discount / 100);
        };
}

const item1 = new Item(1, "cell phone", 500, 10);
const item2 = new Item(2, "book", 50, 0, true);
const item3 = new Item(3, "table", 500, 1);
const item4 = new Item(4, "adapter", 40, 2, true);
let shoppingCart = [item1, item2, item3, item4];

/**
 * 
 * @param {Object} shopCart is array of items
 * @returns {number} final price
 */
function getCheckoutPrice(shopCart) {
    let total = 0;
    for (const item of shopCart) {
        total += item.getFinalPrice();
        if (item.freeShipping === false) {
            total += 3;
        }
    }
    return total;
}
console.log("expect 1040.2: ", getCheckoutPrice(shoppingCart));

/**
 * 
 * @param {Object} shopCart is array of items
 * @returns {Array} items priced over 100
 */
function getItemsPricedOver100(shopCart) {
    let items = [];
    for (const item of shopCart) {
        if (item.price > 100) {
            items.push(item);
        }
    }
    return items;
}

console.log("expect items 1 and 3: ", getItemsPricedOver100(shoppingCart));


/**
 * 
 * @param {Array} shopCart is array of objects
 * @returns {Object} new object including only name and price
 */
function findCheapestItem(shopCart){
    let cheapest = shopCart[0];
    for (const item of shopCart){
        if (item.price < cheapest.price) {
            cheapest = item;
        }
    }
    return {name: cheapest.name, price: cheapest.price};

}

console.log("expect adapter: ", findCheapestItem(shoppingCart));

