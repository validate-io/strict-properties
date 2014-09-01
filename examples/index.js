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
// Returns true

obj.baz = 'foo';
console.log( hasProperties( obj, props ) );
// Returns false