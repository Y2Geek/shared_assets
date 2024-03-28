/**
 * function to perform division 
 * @param {Number} currentTotal 
 * @param {Number} value 
 * @returns Number
 */
let divide = function(currentTotal, value) {
    return currentTotal / value;
}


/**
 * function to perform multiplication 
 * @param {Number} currentTotal 
 * @param {Number} value 
 * @returns Number
 */
let multiply = function(currentTotal, value) {
    return currentTotal * value;
}


/**
 * function to perform addition 
 * @param {Number} currentTotal 
 * @param {Number} value 
 * @returns Number
 */
let addition = function(currentTotal, value) {
    return currentTotal + value;
}


/**
 * function to perform subtraction 
 * @param {Number} currentTotal 
 * @param {Number} value 
 * @returns Number
 */
let subtraction = function(currentTotal, value) {
    return currentTotal - value;
}


/**
 * performs given funciotn on given list of numbers
 * @param {function} sum 
 * @param {Array of Numbers} valueList 
 * @returns Number
 */
function performCalculation(sum, valueList) {
    // Start Total with the first value in the array
    total = Number.parseFloat(valueList.shift());

    for(let val of valueList) {
        val = Number.parseFloat(val);
        total = sum(total, val);
    }

    return total;
}


/**
 * Returns total with given number of decimal places
 * @param {Number} value 
 * @param {Number} places
 * @returns Number
 */
function toDecimalPlaces(value, places = 2) {
    return Number.parseFloat(value).toFixed(places);
}


/**
 * Calls correct function and passes current total and given list of numbers
 * @param {String} sumType 
 * @param {Array of Numbners} valueList 
 * @returns Number
 */
function calculateArray(sumType, valueList, decimals = 2) {
    switch(sumType) {
        case 'division':
            return toDecimalPlaces(performCalculation(divide, valueList), decimals);
        case 'multiplication':
            return toDecimalPlaces(performCalculation(multiply, valueList), decimals);
        case 'addition':
            return toDecimalPlaces(performCalculation(addition, valueList), decimals);
        case 'subtraction':
            return toDecimalPlaces(performCalculation(subtraction, valueList), decimals);
        default:
            console.log('Error, sum not recognized');
    }
}