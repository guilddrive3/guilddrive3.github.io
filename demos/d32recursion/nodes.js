/* eslint-disable no-irregular-whitespace */
"use strict";

/* sample code for collecting info from every node in a tree.  Demonstrates use of an accumulator parameter. 9/12/21 */

let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

/**
     * 
     * @param {Object} node is a node
     * @param {Array} accum is a list of node names
     * @returns {Array} list of node names
     */
function collectNames(node) {
    return accumNames(node, []);
}

/**
 * Helper for collectNames that includes an accumulator parameter
 * @param {Object} node is a node
 * @param {Array} accum is a list of node names
 * @returns {Array} list of node names
 */
function accumNames(node, accum) {
    if (node.children === null) {
        return node.name;
    } else {
        accum.push(node.name);
        for (const childNode of node.children) {
            accum = accum.concat(collectNames(childNode, []));
        }
        return accum;
    }
}

console.log("expect [body, div, label, input, p] :", collectNames(node1));

/**
* collectNames no accum parameter
* @param {Object} node is a node
* @param {Array} accum is a list of node names
* @returns {Array} list of node names
*/
function collectNames2(node, accum) {
    if (node.children === null) {
        return node.name;
    } else {
        let accum = [];
        accum.push(node.name);
        for (const childNode of node.children) {
            accum = accum.concat(collectNames2(childNode, []));
        }
        return accum;
    }
}

console.log("collectNames2 expect [body, div, label, input, p] :", collectNames2(node1));

/**
 * 
 * @param {*} tree is node
 * @returns {undefined}
 */
function printName(tree) {

    if (tree.children === null) {

        console.log(`${tree.name} : ${tree.value}`);

    } else {

        for (let subBranch of tree.children) {

            printName(subBranch);

        }

        console.log(`${tree.name} : ${tree.value}`);

    }

}
printName(node1);
