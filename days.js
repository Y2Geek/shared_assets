/**
 * Generic method to calculate days between 2 given dates.
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns number
 */
function getDays(date1, date2) {
    const miliSeconds = 86400000;
    return (date1 - date2) / miliSeconds;
}


/**
 * Returns number of full days since date given to today
 * @param {Date} startDate 
 * @returns number
 */
function getDaysSince(startDate) {
    return Math.floor(getDays(new Date(), startDate));
}


/**
 * Returns days until given date
 * @param {Date} endDate 
 * @returns number
 */
function getDaysUntil(endDate) {
    return Math.ceil(getDays(endDate, new Date()));
}


/**
 * Returns a new date with the smae date as the one provided
 * @param {Date} date 
 * @returns Date
 */
function cloneDate(date) {
    return new Date(date.toDateString());
}

/**
 * Returns a date object with the provided date with the provided number of days added
 * @param {Date object} date 
 * @param {Number} days 
 * @returns Date object
 */
function addDays(date, days) {
    let newDate = cloneDate(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}


/**
 * Returns a date object with the given amount of weeks added to the given date
 * @param {Date object} date 
 * @param {Number} weeks 
 * @returns Date object
 */
function addWeeks(date, weeks) {
    let newDate = cloneDate(date);
    let days = weeks * 7;
    newDate = addDays(newDate, days);
    return newDate;
}


/**
 * Returns a date object with the provided date with the provided number of months added
 * @param {Date object} date 
 * @param {Number} months 
 * @returns Date object
 */
function addMonths(date, months) {
    let newDate = cloneDate(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
}


/**
 * Returns a date object with the provided date with the provided number of years added
 * @param {Date object} date 
 * @param {Number} years 
 * @returns Date object
 */
function addYears(date, years) {
    let newDate = cloneDate(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
}