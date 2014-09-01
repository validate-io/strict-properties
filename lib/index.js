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

(function() {
	'use strict';

	/**
	* FUNCTION: hasProperties( value, properties )
	*	Validates if a value only has a specified set of properties.
	*
	* @param {Object} value - value to be validated
	* @param {Array} properties - property list
	* @returns {Boolean} boolean indicating whether value has only the desired properties
	*/
	function hasProperties( value, properties ) {
		if ( typeof value !== 'object' || value === null || Array.isArray( value ) ) {
			return false;
		}

		// Get the object keys:
		var keys = Object.keys( value );

		// Check that we have the same number of properties:
		if ( keys.length !== properties.length ) {
			return false;
		}

		// Check for each property, exiting at the first property which is not found...
		for ( var i = 0; i < properties.length; i++ ) {
			if ( !value.hasOwnProperty( properties[i] ) ) {
				return false;
			}
		}
		return true;
	} // end FUNCTION hasProperties()


	// EXPORTS //

	module.exports = hasProperties;

})();