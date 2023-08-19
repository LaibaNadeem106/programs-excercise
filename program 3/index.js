"use strict";
const checkNumberPositiveNegativeORZero = (number) => {
    if (number > 0) {
        return "positive";
    }
    else if (number < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
};
//example
const number = 4;
const result = checkNumberPositiveNegativeORZero(number);
console.log(`${number} is ${result}`);
