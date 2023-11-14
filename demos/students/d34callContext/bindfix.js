
/**
 * 
 * @returns {number} area
 */
function area(){
    console.log(this);   //  _____________________________console.log(this.side) ______________________________________
    return this.side * this.side;
    }
    const square1 = {side: 5,  area: area};
    console.log(area()); //_______________________________
    
    // What will appear in the first console.log line if “use strict” is not commented out?   
    // How could you fix it using bind, call, or apply?
    