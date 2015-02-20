Strict Properties
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value only has specified properties.


## Installation

``` bash
$ npm install validate.io-strict-properties
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var hasProperties = require( 'validate.io-strict-properties' );
```


#### hasProperties( obj, props )

Validates if an input `object` has specified properties.

``` javascript
var obj = {'a': 0},
	props = ['a'];

var bool = hasProperties( obj, props );
// returns true
```


## Notes

* 	This method validates that the `value` is an `object` and returns `false` for any `value` types which are not JavaScript `objects`. 
*	This method does __not__ climb the prototype chain.
* 	The property list should be an `array`.
*	The method returns `false` immediately upon encountering an unrecognized property.


## Examples

``` javascript
var hasProperties = require( 'validate.io-strict-properties' );

var obj = {
	'beep': true,
	'boop': false
};

var props = [
	'beep',
	'boop'
];

console.log( hasProperties( obj, props ) );
// returns true

obj.baz = 'foo';
console.log( hasProperties( obj, props ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-strict-properties.svg
[npm-url]: https://npmjs.org/package/validate.io-strict-properties

[travis-image]: http://img.shields.io/travis/validate-io/strict-properties/master.svg
[travis-url]: https://travis-ci.org/validate-io/strict-properties

[coveralls-image]: https://img.shields.io/coveralls/validate-io/strict-properties/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/strict-properties?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/strict-properties.svg
[dependencies-url]: https://david-dm.org/validate-io/strict-properties

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/strict-properties.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/strict-properties

[github-issues-image]: http://img.shields.io/github/issues/validate-io/strict-properties.svg
[github-issues-url]: https://github.com/validate-io/strict-properties/issues
