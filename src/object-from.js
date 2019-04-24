/**
 * Creates an object from the given keys and values
 *
 * @param {Array} keys      the list of keys for the final object
 * @param {Array} values    the corresponding values for each of the keys in the object
 * @returns {Object} an object with the givem keys and values
 */
export default (keys, values) => {
    const result = {};
    const length = Math.min(keys.length, values.length);

    for (let i = 0; i < length; i++) {
        result[keys[i]] = values[i];
    }

    return result;
};
