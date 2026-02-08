<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Geometric][geometric-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [geometric][geometric-distribution] random variable is

<!-- <equation class="equation" label="eq:geometric_cdf" align="center" raw="F(x;p)= \begin{cases} 0 & \text{ for } x < 0 \\ 1-(1 - p)^{\left\lfloor x \right\rfloor+1} & \text{ otherwise} \end{cases}" alt="Cumulative distribution function for a geometric distribution."> -->

```math
F(x;p)= \begin{cases} 0 & \text{ for } x < 0 \\ 1-(1 - p)^{\left\lfloor x \right\rfloor+1} & \text{ otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;p)= \begin{cases} 0 &amp; \text{ for } x &lt; 0 \\ 1-(1 - p)^{\left\lfloor x \right\rfloor+1} &amp; \text{ otherwise} \end{cases}" data-equation="eq:geometric_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/cdf/docs/img/equation_geometric_cdf.svg" alt="Cumulative distribution function for a geometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `0 <= p <= 1` is the success probability. `x` denotes the number of _failures_ before the first success.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-cdf@v0.3.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-cdf@v0.3.1-deno/mod.js';
```

#### cdf( x, p )

Evaluates the [cumulative distribution function][cdf] for a [geometric][geometric-distribution] distribution with success probability `p`.

```javascript
var y = cdf( 2.0, 0.5 );
// returns 0.875

y = cdf( 2.0, 0.1 );
// returns ~0.271
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.5 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN

y = cdf( 2.0, 1.5 );
// returns NaN
```

#### cdf.factory( p )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [geometric][geometric-distribution] distribution with success probability `p`

```javascript
var mycdf = cdf.factory( 0.5 );
var y = mycdf( 3.0 );
// returns 0.9375

y = mycdf( 1.0 );
// returns 0.75
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-cdf@v0.3.1-deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var p = uniform( 10, 0.0, 1.0, opts );
var x = uniform( 10, 0.0, 5.0, opts );

logEachMap( 'x: %0.4f, p: %0.4f, F(x;p): %0.4f', x, p, cdf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-geometric-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-geometric-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-geometric-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-geometric-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-geometric-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-geometric-cdf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-geometric-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

</section>

<!-- /.links -->
