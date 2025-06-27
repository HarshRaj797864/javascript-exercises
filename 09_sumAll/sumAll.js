const sumAll = function(num1, num2) { 
    // To not allow NaN 
    // if (isNaN(num1) || isNaN(num2)) {
    //     return 'ERROR';
    // }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    // Filter out negative number
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    // Filter out non-integers
    if (num1 - Math.floor(num1) !== 0 || num2 - Math.floor(num2) !== 0 ) {
        return 'ERROR';
    }
    let small = 0;
    let large = 0;
    // Find smaller number to use it as the lower limit of loop
    (num1 - num2 >= 0)?small = num2: small = num1;
    // Upper limit of loop
    large = (num1 + num2) - small;
    // To calculate sum
    let sum = 0;
    while (small <= large) {
        sum += small;
        small ++;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
