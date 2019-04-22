const CLASS_REGEXP = /\[object (\w+)\]/;

/**
 * Returns the native type of an object: "Function" for a function, "Array" for an array, etc.
 *
 * @param {Object} object       the object for which to return the type
 * @return {String} the type of the specified object
 */
export default (object) => {
    const type = Object.prototype.toString.call(object);
    const typeMatch = type.match(CLASS_REGEXP);

    return typeMatch[1];
};

