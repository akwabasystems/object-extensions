
/**
 * Returns the number of seconds represented by the given number
 *
 * @param {Number} number   the number to represent in seconds
 * @return {Number} the number of seconds represented by the given number
 */
Number.seconds = (number) => number * 1000;


/**
 * Returns the number of minutes represented by the given number
 *
 * @param {Number} number   the number to represent in minutes
 * @return {Number} the number of minutes represented by the given number
 */
Number.minutes = (number) => 60 * Number.seconds(number);


/**
 * Returns the number of hours represented by the given number
 *
 * @param {Number} number   the number to represent in hours
 * @return {Number} the number of hours represented by the given number
 */
Number.hours = (number) => 60 * Number.minutes(number);


/**
 * Returns the number of days represented by the given number
 *
 * @param {Number} number   the number to represent in days
 * @return {Number} the number of days represented by the given number
 */
Number.days = (number) => 24 * Number.hours(number);


/**
 * Returns the number of weeks represented by the given number
 *
 * @param {Number} number   the number to represent in weeks
 * @return {Number} the number of weeks represented by the given number
 */
Number.weeks = (number) => 7 * Number.days(number);


/**
 * Returns the number of months represented by the given number
 *
 * @param {Number} number   the number to represent in months
 * @return {Number} the number of months represented by the given number
 */
Number.months = (number) => 30 * Number.days(number);


/**
 * Returns the number of years represented by the given number
 *
 * @param {Number} number   the number to represent in years
 * @return {Number} the number of years represented by the given number
 */
Number.years = (number) => 365.25 * Number.days(number);


/**
 * Converts the given number to a date
 *
 * @param {Number} number   the number (in milliseconds) to convert to date
 * @return {Date} the date corresponding to the given number
 */
Number.toDate = (number) => new Date(number);


/**
 * Invokes the given iterator for the specified number of times
 *
 * @param {Number} number       the number of times to invoke the iterator
 * @param {Function} iterator   the iterator to invoke
 * @param {Object} context      the context for the "this" keyword
 */
Number.times = (number, iterator, context) => {
    if (number < 0) {
        return number;
    }

    for (let i = 0; i < number; i++) {
        iterator.call(context, number, i);
    }

    return number;
};


/**
 * Pads the given number with zeros
 *
 * @param {Number} number       the number to pad
 * @param {Number} length       the total length of the padded string (including the number)
 * @param {Number} radix        the radix to use when converting the number to a string
 * @return {String} a padded string representation of the given number
 */
Number.toPaddedString = (number, length, radix = 10) => {
    const string = number.toString(radix);
    let padding = "";

    Number.times(length - string.length, () => {
        padding += "0";
    });

    return `${padding}${string}`;
};


/**
 * Creates a range of numbers to the specified target
 *
 * @param {Number} number       the initial number in the range
 * @param {Number} target       the target bound of the range
 * @param {Number} step         the step increment or decrement
 * @return {Array} a range of numbers between the given number and the target
 */
Number.to = (number, target, step = 1) => {
    return (number < target) ? Number.upTo(number, target, step) : Number.downTo(number, target, step);
};


/**
 * Creates a range of numbers up to the specified target
 *
 * @param {Number} number       the initial number in the range
 * @param {Number} target       the upper bound of the range
 * @param {Number} step         the step increment
 * @return {Array} a range of numbers between the given number and the target
 */
Number.upTo = (number, target, step = 1) => {
    if (target <= number || step <= 0) {
        return number;
    }

    const result = [];

    for (let i = number; i <= target; i += step) {
        result.push(i);
    }

    return result;
};


/**
 * Creates a range of numbers down to the specified target
 *
 * @param {Number} number       the initial number in the range
 * @param {Number} target       the lower bound of the range
 * @param {Number} step         the step decrement
 * @return {Array} a range of numbers between the given number and the target
 */
Number.downTo = (number, target, step = 1) => {
    if (target >= number || step <= 0) {
        return number;
    }

    const result = [];

    for (let i = number; i >= target; i -= step) {
        result.push(i);
    }

    return result;
};


/**
 * Returns the ASCII character corresponding to the given number
 *
 * @param {Number} number       the number for which to return the ASCII character
 * @return {String} the ASCII character corresponding to the given number
 */
Number.toChar = (number) => String.fromCharCode(number);
