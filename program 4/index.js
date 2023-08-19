"use strict";
const checkEvenOROdd = (number) => {
    if (number % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
};
//example
const number = 6;
const result = checkEvenOROdd(number);
console.log(`${number} is ${result}`);
