// input- initail saving
// interset rate annual and divid it by 12 month.
// number of years 
// the first year saving is the initial amount
function calulateSaving(initialamount, annualIR, numbOfyears) {
    let monthlyintersetrate = annualIR / 12 / 100;
    let numberOfmonth = numbOfyears * 12;
    let saving = initialamount;
    // process we use loop to add it to saving untill the end of number of year(month)
    for (let i = 1; i <= numberOfmonth; i++) {
        saving += saving * monthlyintersetrate;
    }
    //output we will get the saving rounded to 2 decimal point.
    return saving.toFixed(2);
}

console.log(calulateSaving(100, 10, 1));