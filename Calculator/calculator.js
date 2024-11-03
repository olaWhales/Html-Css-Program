const calculatorSreen = document.querySelector('.calculator-screen');
console.log(calculatorSreen);
const innerCalculator = document.querySelector('.inner-calculator');
console.log(innerCalculator);

let calculator = {
    displayValue : "0" ,
    firstOperand : null ,
    waitingForSecondOperator : false ,
    operator: null , 
};

function inputDigit(digit) {
    if(waitingForSecondOperator === true){
        calculator.displayValue = digit ;
        calculator.waitingForSecondOperand = false ;
    }else {
        calculator.displayValue = displayValue === "0" ? digit : displayValue + digit ;
    }
}
