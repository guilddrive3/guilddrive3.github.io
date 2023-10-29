console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z"
console.log( Number(null) );        // 1
console.log( Number(undefined) );       // 0
