/* eslint-disable require-jsdoc */

/**
 * 
 * @param {*} question is any string
 * @param {*} yes is fun
 * @param {*} no  is fun
 * @return {undefined}
 */
function ask(question, yes, no) {
    if (question) {
        yes();
    } else {
        no();
  }
  function showOk() {
   console.log( "You agreed." );
  }
  function showCancel() {
    console.log( "You canceled the execution." );
  }
  ask(0, showOk, showCancel);
}