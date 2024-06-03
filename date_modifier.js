/**
 * Calculates the days between two given dates and returns the result as an Int.
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns Int
 */
function getDays(date1, date2) {
    const miliSeconds = 86400000; //Miliseconds within 24 hours
    return (date1 - date2) / miliSeconds;
}


/**
 * Returns a new Date object with the smae date as the one suplied.
 * @param {Date} date 
 * @returns Date
 */
function cloneDate(date) {
    return new Date(date.toDateString());
}


/**
 * Calculates the number of days between the date given and today.
 * Returns the result as an int.
 * @param {Date} startDate 
 * @returns Int
 */
function getDaysSince(startDate) {
    return Math.floor(getDays(new Date(), startDate));
}


/**
 * Calculates the number of days until the given date from today.
 * Returns the result as an Int.
 * @param {Date} endDate 
 * @returns Int
 */
function getDaysUntil(endDate) {
    return Math.ceil(getDays(endDate, new Date()));
}


/**
 * Returns a new Date object with the given number of days added to the supplied Date object.
 * @param {Date} date 
 * @param {Int} days 
 * @returns Date
 */
function addDays(date, days) {
    let newDate = cloneDate(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}


/**
 * Returns a new Date object with the given number of weeks added to the supplied Date object.
 * @param {Date} date 
 * @param {Int} weeks 
 * @returns Date
 */
function addWeeks(date, weeks) {
    let newDate = cloneDate(date);
    let days = weeks * 7;
    newDate = addDays(newDate, days);
    return newDate;
}


/**
 * Returns a new Date object with the given number of months added to the supplied Date object.
 * @param {Date} date 
 * @param {Int} months 
 * @returns Date
 */
function addMonths(date, months) {
    let newDate = cloneDate(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
}


/**
 * Returns a new Date object with the given number of years added to the supplied Date object.
 * @param {Date} date 
 * @param {Int} years 
 * @returns Date
 */
function addYears(date, years) {
    let newDate = cloneDate(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
}