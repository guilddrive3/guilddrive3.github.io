
const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 4, amount: 5 };
const donation5 = { funderId: 5, amount: 15 };
const day1 = {    donations: [donation1, donation2],    date: "01/10/2022",};
const day2 = {    donations: [donation3, donation4, donation5],    date: "01/11/2022",};

const dailyRecord = [day1, day2];


// eslint-disable-next-line require-jsdoc
function dailyTotalReduce(donations) {
const dailyTot = dailyRecord.reduce((acc, { donations }) => {
return acc + donations.reduce((donationAccum, { amount }) => {
return donationAccum + amount;
}, 0);
}, 0);


return dailyTot;

}

console.log("expect 110: ", dailyTotalReduce(day1.donations)); 