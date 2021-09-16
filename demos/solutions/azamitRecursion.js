"use strict";

function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
// create nodes with values
// const abe = new TreeNode('Abe');

// const homer = new TreeNode('Homer');
// const bart = new TreeNode('Bart');
// const lisa = new TreeNode('Lisa');
// const maggie = new TreeNode('Maggie');
// // associate root with is descendents 
// abe.descendents.push(homer);
// homer.descendents.push(bart, lisa, maggie);



function LinkedList(value, next) {
    this.value = value;
    this.next = next;
}
const maggie1 = new LinkedList('Maggie', null);
const lisa1 = new LinkedList('Lisa', maggie1);
const bart1 = new LinkedList('Bart', lisa1);
const homer1 = new LinkedList('Homer', bart1);
const abe1 = new LinkedList('Abe', homer1);


/**
 * 
 * @param {Object} list a linked list object.
 * @param {string} str string to matched.
 * @returns {Object} the matched name object/node.
 */
function findListNode(list, str) {
    if (list.value === str) {
        return list;

    } else if (list.next !== null) {
        return (findListNode(list.next, str))
    }
}
/**
 * 
 * @param {Object} list a node.
 * @returns {string} the node value changed to uppercase.
 */
function allCaps(list) {
    list.value = list.value.toUpperCase();

}
/**
 * 
 * @param {Object} list a list of nodes
 * @returns {string} modified name value.
 */
function addStars(list) {
    list.value = "***" + list.value + "***";
}

function reverseNode(list) {
    let reversed = "";
    for (let i = list.value.length - 1; i >= 0; i--) {
        reversed += list.value.charAt(i);
    }
    list.value = reversed;

}

function treeModifier(list, modifierFun) {
    modifierFun(list);
    if (list.next !== null) {
        treeModifier(list.next, modifierFun);
    }
}

const TREE_COLLECTOR = [];
/**
 * 
 * @param {Object} list the linkedlist object
 * @returns {Array} a collection of the list value.
 */
function treeCollector(list) {
    TREE_COLLECTOR.push(list.value);
    if (list.next !== null) {
        treeCollector(list.next);
    }
    return TREE_COLLECTOR;
}


console.log(treeCollector(abe1));

/**
 * 
 * @param {Object} simpsons its a tree like object.
 * @returns {undefined} nothing is returned just display.
 */
function displayNames(simpsons) {
    if (simpsons.descendents === []) {
        console.log(`${simpsons.value}`);
    } else {
        for (const simpson of simpsons.descendents) {
            displayNames(simpson);
        }
        console.log(`${simpsons.value}`);
    }
}

/**
 * 
 * @param {Object} tree 
 * @param {string} str a value to be found.
 * @returns {boolean} true if str is found else false.
 */
function findTarget(tree, str) {
    if (str === "") {
        return;
    }
    if (tree.value === str) {
        return true;
    }
    if (tree.descendents !== []) {
        for (const subTree of tree.descendents) {
            if (findTarget(subTree, str)) {
                return true;
            }
        }

    }
    return false;
}


/**
 * 
 * @param {Object} tree 
 * @param {string} str a name to be matched.
 * @returns {Object} sub tree of the matche name.
 */
function findSubtree(tree, str) {
    if (tree.value === str) {
        return tree;

    } else if (tree.descendents.length !== 0) {
        for (const subTree of tree.descendents) {
            if (findTarget(subTree, str)) {
                return findSubtree(subTree, str);
            }

        }
    }
    return null;
}


   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');

   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);


  console.log("expect true: ",  findTarget(abe, "Lisa"));

  console.log("expect false: ",  findTarget(abe, "Lisa123"));
