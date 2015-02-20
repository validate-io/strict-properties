/**
*
*	VALIDATE: strict-properties
*
*
*	DESCRIPTION:
*		- Validates if a value only has specified properties.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	getKeys = Object.keys || require( 'object-keys' );


// HASPROPERTIES //

/**
* FUNCTION: hasProperties( value, properties )
*	Validates if a value only has a specified set of properties.
*
* @param {Object} value - value to be validated
* @param {Array} properties - property list
* @returns {Boolean} boolean indicating whether value has only the desired properties
*/
function hasProperties( value, properties ) {
	var keys, len;
	if ( !isObject( value ) ) {
		return false;
	}
	len = properties.length;

	// Get the object keys:
	keys = getKeys( value );

	// Check that we have the same number of properties:
	if ( keys.length !== len ) {
		return false;
	}
	// Check for each property, exiting at the first property which is not found...
	for ( var i = 0; i < len; i++ ) {
		if ( !value.hasOwnProperty( properties[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION hasProperties()


// EXPORTS //

module.exports = hasProperties;
