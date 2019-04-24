import isNumber from "../is-number";


/**
 * Returns the item at the specified index in this array
 *
 * @param {Array} array     the array in which to find the item
 * @param {Number} index    the index at which to find the item
 * @return the item at the specified index in this array
 */
Array.itemAt = (array, index) => {
    return (isNumber(index) && index < array.length) ? array[index] : undefined;
};


/**
 * Returns the first item in the specified array
 *
 * @param {Array} array     the array for which to return the first item
 * @return the first item in the specified array
 */
Array.first = (array) => array[0];


/**
 * Returns the last item in the specified array
 *
 * @param {Array} array     the array for which to return the first item
 * @return the first item in the specified array
 */
Array.last = (array) => array[array.length - 1];


/**
 * Returns the smallest item in the specified array
 *
 * @param {Array} array     the array for which to return the item
 * @return the smallest item in the specified array
 */
Array.min = (array) => Math.min(...array);


/**
 * Returns the largest item in the specified array
 *
 * @param {Array} array     the array for which to return the item
 * @return the largest item in the specified array
 */
Array.max = (array) => Math.max(...array);


/**
 * Clears the contents of the specified array
 *
 * @param {Array} array     the array for which to clear the contents
 */
Array.clear = (array) => {
    array.length = 0;
};


/**
 * Returns true if the given array is empty; otherwise, returns false
 *
 * @param {Array} array     the array to check
 * Returns true if the given array is empty; otherwise, returns false
 */
Array.isEmpty = (array) => array.length === 0;


/**
 * Partitions the elements of the specified array into two groups based on the invocation of the given iterator:
 * the ones that return true and those that return false.
 *
 * @param {Array} array         the array to partition
 * @param {Function} iterator   the iterator function to apply to each item of the array
 * @param {Object} context      the context for the "this" keyword
 * @return an array that contains two sub-arrays after invoking the iterator function: one for truthy values
 * and one for falsy ones
 */
Array.partition = (array, iterator, context) => {
    const truthies = [];
    const falsies = [];

    array.forEach((item, index) => {
        (iterator.call(context, item, index) ? truthies : falsies).push(item);
    });

    return [truthies, falsies];
};
