/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-strict-properties', function tests() {

	it( 'should export a function', function test() {
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var result = validate(
			{'beep':5,'boop':5},
			['beep','boop']
		);
		assert.ok( result );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			true,
			[],
			'5',
			function(){},
			null,
			NaN,
			{'beep':'bar'},
			{'beep':1,'boop':2,'bap':3},
			{'beep':1,'bap':3},
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( values[i], ['beep','boop'] ) );
		}
	});

});
