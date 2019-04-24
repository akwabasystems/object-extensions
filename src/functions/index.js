import isFunction from "../is-function";

const ARGUMENTS_REGEXP = /^[\s\(]*function[^(]*\(([^\)]*)\)/;


/**
 * Invokes the given function and returns a promise that resolves with the result of the invocation
 *
 * @param {Function} fn     the function to invoke
 * @returns {Promise} a promise that resolves with the result of the function invocation
 */
Function.invoke = (fn) => {
    if (!isFunction(fn)) {
        return;
    }

    const result = ("returnValue" in fn) ? fn.returnValue : fn.returnValue = fn.call();
    return Promise.resolve(result);
};


/**
 * Invokes the given function if the specified condition is met, and returns a promise
 * that resolves with the result of the invocation
 *
 * @param {Function} fn         the function to invoke
 * @param {Boolean} condition   the condition that must be met prior the invocation
 * @returns {Promise} a promise that resolves with the result of the function invocation
 */
Function.invokeIf = (fn, condition) => {
    return (!condition) ? Promise.resolve(undefined) : Function.invoke(fn);
};


/**
 * Returns the list of arguments for the specified function
 *
 * @param {Function} fn         the function for which to return the argument list
 * @returns {String} the list of arguments for the specified function
 */
Function.argumentNames = (fn) => {
    return fn.toString().match(ARGUMENTS_REGEXP)[1].replace(/\s+/g, "");
};


/**
 * Delays the execution of the specified function for the given duration (in seconds)
 *
 * @param {Function} fn         the function to delay
 * @param {Number} timeout      the delay, in seconds
 */
Function.delay = (fn, timeout) => {
    if (!isFunction(fn)) {
        return;
    }

    return setTimeout(fn, timeout * 1000);
};


/**
 * Returns a function pre-filled with the given arguments
 *
 * @param {Function} fn         the function to pre-fill
 * @param {Object[]} fnArgs     the arguments to pre-fill the function with
 * @return {Function} a function with the pre-filled arguments
 */
Function.withArguments = (fn, ...fnArgs) => {
    if (!fnArgs.length) {
        return fn;
    }

    const _originalFn = fn;
    return (...args) => {
        const finalArguments = fnArgs.concat(args);
        return _originalFn.apply(_originalFn, finalArguments);
    };
};
