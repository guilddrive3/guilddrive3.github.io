



setTimeout(sayHi(), 3000);

// eslint-disable-next-line require-jsdoc
function sayHi() {
    return function () {
        console.log("hi");
    };
}