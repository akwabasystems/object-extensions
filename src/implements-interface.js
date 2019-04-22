import isArray      from "./is-array";
import hasMethod    from "./has-method";


/**
 * Returns true if the given object conforms to the specified protocol. In this implementation,
 * the conformance to a protocol simply means that the instance implements all the methods listed
 * in the "requiredMethods" property of the interface. This is a loose implementation concept only
 * intended for use by classes that act as delegates to a given widget.
 *
 * @param {Object} object       the instance to check for the protocol conformance
 * @param {Array} protocol      the interface for which to check the conformance
 * @return {Boolean} true if the given object conforms to the specified protocol; otherwise, returns false
 */
export default (object, protocol) => {

    if (!isArray(protocol.requiredMethods)) {
        return false;
    }

    return protocol.requiredMethods.every((method) => hasMethod(object, method));
};
