/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var smallP = require( './fixtures/julia/small_p.json' );
var largeP = require( './fixtures/julia/large_p.json' );


// VARIABLES //

var cdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = cdf( NaN, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = cdf( 4.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a valid `p`, the function returns `1`', opts, function test( t ) {
	var y = cdf( PINF, 0.5 );
	t.equal( y, 1.0, 'returns 1' );
	t.end();
});

tape( 'if provided a negative number for `x` and a valid `p`, the function returns `0`', opts, function test( t ) {
	var y = cdf( NINF, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = cdf( -4.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = cdf( -0.5, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a value outside `[0,1]` for success probability `p`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 3.0, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 3.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 3.0, -0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 3.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the cdf for `x` given small parameter `p`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var p;
	var y;
	var i;

	expected = smallP.expected;
	x = smallP.x;
	p = smallP.p;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 20.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given large parameter `p`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var p;
	var y;
	var i;

	expected = largeP.expected;
	x = largeP.x;
	p = largeP.p;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
