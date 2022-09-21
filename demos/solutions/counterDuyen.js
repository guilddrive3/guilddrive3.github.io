function makeCounter() {



    let count = 0;
    
    
    
    return function(increment = 1) {
    
    count = count + increment;
    
    if( increment > 1) {
    
    return "Warning: increment was by value greater than 1: " + count;
    
    } else return count;
    
    };
    
    
    
    }