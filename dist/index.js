"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=t(function(R,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-floor/dist'),v=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/constants-float64-pinf/dist');function y(r,e){return u(r)||u(e)||e<0||e>1?NaN:r<0?0:r===N?1:(r=q(r),1-v(1-e,r+1))}n.exports=y
});var c=t(function(b,o){
var d=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-floor/dist'),F=require('@stdlib/math-base-special-pow/dist'),w=require('@stdlib/constants-float64-pinf/dist');function I(r){if(f(r)||r<0||r>1)return d(NaN);return e;function e(i){return f(i)?NaN:i<0?0:i===w?1:(i=l(i),1-F(1-r,i+1))}}o.exports=I
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=a(),m=c();P(s,"factory",m);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
