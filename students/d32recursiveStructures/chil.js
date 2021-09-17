"use strict"; 

/**
 * 
 * @param {*} root is a root node in tree
 * @param {*} name is string
 * @returns {Object} the node with name as name value
 */
function contains(root, name) {
    if (root.descendents == undefined || !Array.isArray(root.descendents)) {
        console.log(" contains ", root, root.descendents);
        return root.value == name;
    }
    else {

        let chil;
        chil = root.value == name;
        console.log(" outside ", chil, root.value, root.descendents.length);
        for (i = 0; i < root.descendents.length; i++) {
            console.log(" inside ", chil, root.value, root.descendents[i].value);
            let vall = contains(root.descendents[i], name);
            chil = chil || vall;
        }
        console.log(" after ", chil, root.descendents.length);
        return chil;
    }
}

