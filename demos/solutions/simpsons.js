"use strict";

/**
 * 
 * @param {string} value is a name of character
 * @returns {TreeNode} this is a constructor function
 */
function TreeNode(value) {
    this.value = value;
    this.descendents = [];
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

   /**
    * 
    * @param {treeNode} treeNode is a node of the tree
    * @returns {undefined} just logs names to console
    */
   function treeWalk(treeNode){
   console.log(treeNode.value);
   //treeNode.value = treeNode.value + " Simpson";
    /* base -- check for descendents array empty */
    if (treeNode.descendents.length === 0){
        return; 
    } else {
        for (const node of treeNode.descendents){
            treeWalk(node);
        }
    }
}
 
treeWalk(abe);
console.log(JSON.stringify(abe));

/* Given a target value, return true or false if there is a node in the tree with the target value. E.g.,
contains(tree, “Lisa”) → true
contains(tree, “Crusty”) → false
*/

   /**
    * 
    * @param {treeNode} treeNode is a node of the tree
    * @param {string} targetName is name to search for
    * @returns {boolean} true if targetName is in the tree
    */
    function treeContains(treeNode, targetName){
        if (treeNode.value === targetName){ //found it, return true
            return true;
        } else if (treeNode.descendents.length === 0){ // base -- did not find and no further possibilities
            return false;
        } else {/* check each descendent, if any returns true then return true, else return false */
            
            for (const node of treeNode.descendents){
                if (treeContains(node, targetName) === true) {
                    return true;
                }
            }
            /* no descendent returned true, so need to return false */
            return false;
        }
    }

    console.log("expect true: ", treeContains(abe, "Homer"));
    console.log("expect true: ", treeContains(abe, "Lisa"));
    console.log("expect false: ", treeContains(abe, "Bob"));