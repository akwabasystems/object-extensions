/**
 * Copies the properties of the specified object into a new one
 *
 * @param {Object} source       the object whose properties to copy
 * @returns {Object} an object with the properties of the specified one
 */
export default (source) => {
    const destination = {};
    Object.getOwnPropertyNames(source).forEach((key) => {
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(destination, key, descriptor);
    });

    return destination;
};
