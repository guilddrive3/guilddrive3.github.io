"use strict"

module.exports={computeSalesCommission,compoundInterest,
    calcDownpayment,sumDigit,multDigit,convertFahrenheit,calcDistance};

function computeSalesCommission(isSalary,salesAmount){
 
    if(isSalary===true){
        
        if(salesAmount<300){
           let commision =0;
       
            return(commision)
        }
        else if(salesAmount>=300&&salesAmount<500){
            let  commision =(salesAmount*0.01);
    
       return("commision: ",commision)
        }else {
            let commision =(((salesAmount-500)*0.02)+500*0.01);
           
            return("commision: ",commision)
        
        }
    
    }else{
        if(salesAmount<300){
            let commision=0;
            return commision;
        }
        else if(salesAmount>=300&&salesAmount<500){
            let  commision =salesAmount*0.02;
         
            return("commision: ",commision);
        }
         else {
            let commision =(((salesAmount-500)*0.03)+500*0.02);
          
            return("commision: ",commision)
        }
    
    
    }
    
}
//********************************************************** */



function compoundInterest(initialAmount,annualInterest,numberOfYears){
    let monthsInYears = numberOfYears*12;
    let monthlyRate = annualInterest/1200; 
    let balance = initialAmount;
    for(let i = 1; i <= monthsInYears; i++){
        let monthlyAmount = monthlyRate*balance;
        balance += monthlyAmount;

    }
    return balance;
}
//************************************************* */

function calcDownpayment(cost){
 
    if(cost>=0&&cost<50000){
        const downPayment=cost*0.05;
        return downPayment;
    }else if(cost>=50000&&cost<100000){

        const downPayment=2500+((cost-50000)*0.1);
        return downPayment;


    }else if(cost>=100000&&cost<200000){

        const downPayment=7500+((cost-100000)*0.15);
        return downPayment;
    
    
    }else if(cost>=200000){

        const downPayment=20000+((cost-200000)*0.1);
        return downPayment;
    
    
    }

}
/***************************************************************** */


function sumDigit(value){
    let sum=0;
    while (value!=0) {
        sum +=value % 10;
        value = Math.floor(value / 10);
    }
    return sum;
    }
    
    
    function multDigit(value){
    
       let product=1;
        while (value) {
            let digit=value % 10;
    
            product =product*digit
            value = Math.floor(value / 10);
        }
        return product;
        
        }
        //*********************** ******/

        function convertFahrenheit(fahrenheit){
            let celcius=(fahrenheit-32)*5/9;
            return celcius.toFixed(4);
        
        }
// //*********************** ******/

function calcDistance(x1,y1,x2,y2){

    let distance=Math.sqrt(((x2-x1)**2)+(y2-y1)**2)
    return distance.toFixed(2);

}