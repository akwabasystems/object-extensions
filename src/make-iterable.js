/**
 * Makes the given object iterable. The iterable behavior adds a generator method to the object,
 * which returns a sequence of the object's values on each invocation of `next()`.
 *
 * @param {Object} object       the object to make iterable
 * @returns {Array} keys        the keys to make iterable
 */
export default (object, keys = []) => {
    object[Symbol.iterator] = function *iterate() {
        for (const key of keys) {
            yield object[key];
        }
    };
};
