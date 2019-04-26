# @akwaba/object-extensions

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


### Number static methods

- `Number.seconds(number)` - Returns the number of seconds represented by the given number
- `Number.minutes(number)` - Returns the number of minutes represented by the given number
- `Number.hours(number)` - Returns the number of hours represented by the given number
- `Number.days(number)` - Returns the number of days represented by the given number
- `Number.weeks(number)` - Returns the number of weeks represented by the given number
- `Number.months(number)` - Returns the number of months represented by the given number
- `Number.years(number)` - Returns the number of years represented by the given number
- `Number.toDate(number)` - Converts the given number to a date
- `Number.times(number, iterator, context)` - Invokes the given iterator for the specified number of times
- `Number.toPaddedString(number, length, radix = 10)` - Pads the given number with zeros
- `Number.to(number, target, step = 1)` - Creates a range of numbers to the specified target
- `Number.upTo(number, target, step = 1)` - Creates a range of numbers up to the specified target
- `Number.downTo(number, target, step = 1)` - Creates a range of numbers down to the specified target
- `Number.toChar(number)` - Returns the ASCII character corresponding to the given number


### String static methods

- `String.trim(string)` - Removes all leading and trailing spaces from the given string
- `String.truncate(string, length = 30, truncation = "...")` - Truncates this string to the specified length and according to the given pattern
- `String.toCamelCase(string)` - Formats the given string in a camel-case format by removing all dashes and capitalizing the resulting words
- `String.capitalize(string)` - Capitalizes the first letter of the given string
- `String.escapeHTML(string)` - Replaces all HTML special characters in the given string with the equivalent HTML entities
- `String.removeScripts(string)` - Removes all "script" tags from the given string
- `String.removeTags(string)` - Removes all HTML tags from the given string
- `String.isEmpty(string)` - Returns true if the given string is empty; otherwise, returns false
- `String.contains(string, pattern)` - Returns true if the given string contains the specified pattern; otherwise, returns false
- `String.contains(string, pattern)` - Returns true if the given string contains the specified pattern; otherwise, returns false
- `String.startsWith(string, pattern)` - Returns true if the given string starts with the specified pattern; otherwise, returns false
- `String.endsWith(string, pattern)` - Returns true if the given string ends with the specified pattern; otherwise, returns false
- `String.format(string, replacement)` - Creates a template based on the given string, and replaces its properties with those of the specified replacement object
- `String.toUnicode(string)` - Returns a Unicode representation of the given string


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