"use strict";

function Period(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
    this.format = () => {
        console.log(this); // => true
        return this.hours + ' hours and ' + this.minutes + ' minutes';
    }
}

    //   Period.prototype.format = () => {
    //     console.log(this ); // => true
    //     return this.hours + ' hours and ' + this.minutes + ' minutes';
    //   };
    const walkPeriod = new Period(2, 30);
    console.log(walkPeriod.format()); // => 'undefined hours and undefined minutes'