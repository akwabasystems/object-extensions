/**
 * Defines an abstract function. It is to be used by components to define methods that
 * must be implemented by subclasses.
 *
 * @return {Function} a template function that throws an exception
 */
export default () => {
    throw new Error("This method is abstract and must be implemented.");
};
