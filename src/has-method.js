import isFunction from "./is-function";


/**
 * Returns true if the specified object has the given method; otherwise, returns false
 *
 * @param {Object} object       the object to check
 * @param method                the method to check on the object
 * @return {Boolean} true if the specified object has the given method; otherwise, returns false
 */
export default (object, method) => {
    return (method in object && isFunction(object[method]));
};
