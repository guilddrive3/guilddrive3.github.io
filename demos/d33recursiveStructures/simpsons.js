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
    /* base -- check for descendents array empty */
    if (treeNode.descendents.length === 0){
        //done
    } else {
        for (const node of treeNode.descendents){
            treeWalk(node);
        }
    }
}
 
treeWalk(abe);