"use strict";  
/* eslint-disable */

/**
 * @returns {undefined}
 */
function setLatLong() {
    this.lat = 41.00;
    this.long = -92.96;
    console.log(this);
  }

  const setLL = setLatLong(); // undefined
  console.log("lat : ", lat);
  console.log("setLL : ", setLL);