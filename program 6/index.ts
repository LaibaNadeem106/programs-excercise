const calculateMathExpression =(): number=> {
    const numerator =(10+5)*3-2;
    const denominator =4%3-7;
    return numerator/denominator;
};
//example
const result = calculateMathExpression();
console.log(`The result of the mathematical expression is: ${result}`);