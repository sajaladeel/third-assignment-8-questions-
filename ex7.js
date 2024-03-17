"use strict";
// take array of numbers and use for loop to get some of all numbers in array
function calculatesum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
const num1 = [2, 3, 1, 4, 8];
const result1 = calculatesum(num1);
console.log(result1);
