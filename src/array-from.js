import isFunction from "./is-function";


/**
 * Creates an array from the items in the given object
 *
 * @param {Object} object            the object from which to create an array
 * @returns {Array} an array from the items in the given object
 */
export default (object) => {
    if (("toArray" in object) && isFunction(object.toArray)) {
        return object.toArray();
    }

    let length = object.length || 0;
    const results = new Array(length);

    while (length--) {
        results[length] = object[length];
    }

    return results;
};
