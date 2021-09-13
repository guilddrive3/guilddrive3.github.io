/* eslint-disable */

const xstack = [];

function funX(a, b) {
    context = { function: "funX", a: a, b: b, c: "undefined"}
    stackLog("push", context);    
    let c;
    c = 5;
    context.c = c;
    funY(a * c, "yes");
    stackLog("pop", {function: "funX"});
}

function funY(x, y) {
    const context = { function: "funY", x: x, y: y, z: "undefined" }
    stackLog("push", context);
    let z;
    z = "I can see the sea";
    context.z = z;
    stackLog("pop", {function: "funY"});
}

function main() {
    const context = { function: "main", a: "undefined",   b: "undefined"  };
    stackLog("push", context );
    let a;
    let b;
    a = "Hello";
    context.a = a;
    funX(3, a);
    b = "World";
    context.b = b;
    stackLog("pop", {function: "main"});
}

main();

/**
 * 
 * @param {string} pushpop is push or pop to id operation
 * @param {Object} context has info on the exec context stack
 * @returns {undefined} 
 * side effect:  logs global xstack to console
 */
function stackLog(pushpop, context) {
    let location = null;
    if (pushpop === "push") {
        xstack.push(context);
        location = "enter";
    } else {
        xstack.pop();
        location = "exit";
    }
//    const location = (pushpop === "push" ? "enter" : "exit");
    console.log(`${context.function} ${location} `);  //:: ${JSON.stringify(context)}` );
 //   console.log(` ${JSON.stringify(context)} ${location} `);  //:: ${JSON.stringify(context)}` );
    console.log(JSON.stringify(xstack));
}