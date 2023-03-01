// input sales and argument.
// step - we use function to get the commission 
function computeSalesCommission(salaried, sales) {
    let commission = 0;
    if (salaried) {
        if (sales >= 300 && sales <= 500) {
            commission = sales * 0.01;
        } else if (sales > 500) {
            commission = 500 * 0.01 + (sales - 500) * 0.02;
        } else {
            commission = 0;
        }
    } else {
        if (sales >= 300 && sales <= 500) {
            commission = sales * 0.02;
        } else if (sales > 500) {
            commission = 500 * 0.02 * (sales - 500) * 0.03;
        } else {
            commission = 0;
        }
    }
    return commission;
}
console.log(computeSalesCommission(false, 300));