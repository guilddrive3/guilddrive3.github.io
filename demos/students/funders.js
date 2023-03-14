
/*
Assume you have the following data structure for daily donations.  Write a function, funderTotals, as 
shown in the examples below.  Your function should work for an expanded database of donations. 
First write JSDoc that constitutes a defining table--i.e., params, returns, steps.
You may write this in VSCode and then paste your answer into Sakai.
This must be your own work, do not share or collaborate with anyone else.
*/
const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

const dailyRecord = [day1, day2];


/**
 * 
 * @param {Array} dailyRec is array of daily donation objects
 * @param {number} funderId is id of funder
 * @returns {Array} array of objects with dates and amounts of donations by this funderId
 * Steps:
 * 1. go through dailyRec array and get the day objects
 * 2. for each day object get the donations for the day and see if any made by this funder
 * 3. if so, make the new object and save in new array
  
 */
function funderTotals(dailyRec, funderId) {
    const funderDonations = [];
    for (const day of dailyRec) {
        for (const donation of day.donations) {
            if (donation.funderId === funderId) {
                const funderDonation = { date: day.date, amount: donation.amount };
                funderDonations.push(funderDonation);
            }
        }
    }
    return funderDonations;
}

console.log(`expect [{date: "01/10/2022", amount: 100}, {date: "01/11/2022", amount: 15}] :  `, funderTotals(dailyRecord, 1));
console.log(`expect [{date: "01/11/2022", amount: 1}] :  `, funderTotals(dailyRecord, 3));
console.log(`expect [{date: "01/10/2022", amount: 10}, {date: "01/11/2022", amount: 5}] :  `, funderTotals(dailyRecord, 2));

function flatten(dailyRec) {
    const flatArr = [];
    for (const day of dailyRec) {
        for (const donation of day.donations) {
            flatArr.push({ date: day.date, id: donation.funderId, amount: donation.amount });
        }
    }
    return flatArr;
}

console.log("flatten returns:  ", flatten(dailyRecord));