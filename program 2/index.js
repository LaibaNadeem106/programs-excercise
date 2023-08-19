"use strict";
const calculateCubeVolume = (sideLength) => {
    return Math.pow(sideLength, 3);
};
//example
const sideLength = 6;
const cubeVolume = calculateCubeVolume(sideLength);
console.log(`The volume of the cube is ${cubeVolume}`);
