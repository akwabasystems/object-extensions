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



### Usage

Import the module into your file as follows:

```js

import Extensions from '@akwaba/object-extensions';

// Do something with the module
console.log("isArray: ", Extensions.isArray([]));

```


## License
Copyright (c) 2019 Akwaba Systems, Inc.