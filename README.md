# @akwaba/object

## Overview

A collection of object utility methods.

Published on [npmjs.com](https://www.npmjs.com) as `@akwaba/object-extensions`.


## API

- `abstractFunction` - Defines an abstract function
- `arrayFrom(object)` - Creates an array from the items in the given object
- `getClass(object)` - Returns the native type of an object: `Function` for a function, `Array` for an array, etc.
- `hasMethod(object, method)` - Returns true if the specified object has the given method; otherwise, returns false
- `implementsInterface(object, protocol)` - Returns true if the given object conforms to the specified protocol; otherwise, returns false
- `isArray(object)` - Returns true if the specified object is an array; otherwise, returns false
- `isDefined(object)` - Returns true if this object is defined; otherwise, returns false
- `isFunction(object)` - Returns true if the specified object is a function; otherwise, returns false
- `isNumber(object)` - Returns true if the specified object is a number; otherwise, returns false
- `isString(object)` - Returns true if the specified object is a string; otherwise, returns false
- `isUndefined(object)` - Returns true if this object is undefined; otherwise, returns false
- `objectFrom(keys, values)` - Creates an object from the given keys and values
- `copyPropertiesFrom(object)` - Copies the properties of the specified object into a new one
- `makeIterable(object, keys)` - Makes the given object iterable


### Function static methods

- `Function.invoke(fn)` - Invokes the given function and returns a promise that resolves with the result of the invocation
- `Function.invokeIf(fn, condition)` - Invokes the given function if the specified condition is met, and returns a promise that resolves with the result of the invocation
- `Function.argumentNames(fn)` - Returns the list of arguments for the specified function
- `Function.delay(fn, timeout)` - Delays the execution of the specified function for the given duration (in seconds)
- `Function.withArguments(fn, ...args)` - Returns a function pre-filled with the given arguments


### Array static methods

- `Array.first(array)` - Returns the first item in the specified array
- `Array.last(array)` - Returns the last item in the specified array
- `Array.itemAt(array, index)` - Returns the item at the specified index in the given array
- `Array.min(array)` - Returns the smallest item in the specified array
- `Array.max(array)` - Returns the largest item in the specified array
- `Array.clear(array)` - Clears the contents of the specified array
- `Array.isEmpty(array)` - Returns true if the given array is empty; otherwise, returns false
- `Array.partition(array, iterator, context)` - Partitions the elements of the specified array into two groups based on the invocation of the given iterator: the ones that return true and those that return false.



### Usage

Import the module into your file as follows:

```js

import Extensions from '@akwaba/object-extensions';

// Do something with the module
console.log("isArray: ", Extensions.isArray([]));   // isArray: true

// Note: Array and Function static methods are automatically imported 
// as part of the module import; so they can be used right away.
console.log("isEmpty: ", Array.isEmpty([]));    // isEmpty: true

```


## License
Copyright (c) 2019 Akwaba Systems, Inc.