import getClass from "./get-class";


/**
 * Returns true if the specified object is a string; otherwise, returns false
 *
 * @param {Object} object       the object to check
 * @return {Boolean} true if the object is a string; otherwise, returns false
 */
export default (object) => getClass(object) === "String";
