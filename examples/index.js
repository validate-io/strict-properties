'use strict';

var hasProperties = require( './../lib' );

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