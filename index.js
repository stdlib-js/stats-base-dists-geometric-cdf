// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){return r!=r}var p=Math.floor;function v(r){return p(r)===r}function b(r){return v(r/2)}function d(r){return b(r>0?r-1:r+1)}var s=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY;function _(r){return r===s||r===w}var A=Math.sqrt;function m(r){return Math.abs(r)}var h,U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),j=Object.prototype.toString,g=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",I=U&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return j.call(r);n=r[N],u=N,t=null!=(o=r)&&g.call(o,u);try{r[N]=void 0}catch(t){return j.call(r)}return e=j.call(r),t?r[N]=n:delete r[N],e}:function(r){return j.call(r)},O="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(O&&n instanceof Uint32Array||"[object Uint32Array]"===I(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=h,H="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G([1,3.14,-3.14,NaN]),n=t,r=(H&&n instanceof Float64Array||"[object Float64Array]"===I(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L=F,M="function"==typeof Uint8Array,V="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,256,257]),n=t,r=(M&&n instanceof Uint8Array||"[object Uint8Array]"===I(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,Y=x,q="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,t,n;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,65536,65537]),n=t,r=(q&&n instanceof Uint16Array||"[object Uint16Array]"===I(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:k,uint8:Y};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var R={HIGH:J,LOW:K},X=new L(1),Z=new T(X.buffer),$=R.HIGH,rr=R.LOW;function tr(r,t){return X[0]=t,r[0]=Z[$],r[1]=Z[rr],r}function nr(r,t){return 1===arguments.length?tr([0,0],r):tr(r,t)}var er=!0===Q?0:1,or=new L(1),ur=new T(or.buffer);function ir(r,t){return or[0]=r,ur[er]=t>>>0,or[0]}function fr(r){return 0|r}var ar,cr,lr=!0===Q?1:0,yr=new L(1),pr=new T(yr.buffer);function vr(r){return yr[0]=r,pr[lr]}!0===Q?(ar=1,cr=0):(ar=0,cr=1);var br={HIGH:ar,LOW:cr},dr=new L(1),sr=new T(dr.buffer),wr=br.HIGH,_r=br.LOW;function Ar(r,t){return sr[wr]=r,sr[_r]=t,dr[0]}var mr=[0,0];function hr(r,t){var n,e;return nr(mr,r),n=mr[0],n&=2147483647,e=vr(t),Ar(n|=e&=2147483648,mr[1])}var Ur=!0===Q?1:0,jr=new L(1),gr=new T(jr.buffer);function Nr(r,t){return jr[0]=r,gr[Ur]=t>>>0,jr[0]}var Ir=1023,Or=1048576,Sr=[1,1.5],Er=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Tr(r,t,n,e){return y(r)||_(r)?(t[e]=r,t[e+n]=0,t):0!==r&&m(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Hr=[0,0],Gr=[0,0];function Pr(r,t){var n,e;return 0===t||0===r||y(r)||_(r)?r:(Tr(r,Hr,1,0),t+=Hr[1],t+=function(r){var t=vr(r);return(t=(2146435072&t)>>>20)-Ir|0}(r=Hr[0]),t<-1074?hr(0,r):t>1023?r<0?w:s:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,nr(Gr,r),n=Gr[0],n&=2148532223,e*Ar(n|=t+Ir<<20,Gr[1])))}var xr=2147483647,Lr=1048575,Mr=1048576,Vr=2147483647,Wr=1083179008,kr=1e300,Yr=1e-300,qr=[0,0],Cr=[0,0];function zr(r,t){var n,e,o,u,i,f,a,c,l,p,b,h,U,j;if(y(r)||y(t))return NaN;if(nr(qr,t),i=qr[0],0===qr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return A(r);if(-.5===t)return 1/A(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(t===s)?0:s}(r,t)}if(nr(qr,r),u=qr[0],0===qr[1]){if(0===u)return function(r,t){return t===w?s:t===s?0:t>0?d(t)?r:0:d(t)?hr(s,r):s}(r,t);if(1===r)return 1;if(-1===r&&d(t))return-1;if(_(r))return r===w?zr(-0,-t):t<0?0:s}if(r<0&&!1===v(t))return(r-r)/(r-r);if(o=m(r),n=u&Vr|0,e=i&Vr|0,a=i>>>31|0,f=(f=u>>>31|0)&&d(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&vr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*kr*kr:f*Yr*Yr;if(n>1072693248)return 0===a?f*kr*kr:f*Yr*Yr;b=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ir(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Cr,o)}else b=function(r,t,n){var e,o,u,i,f,a,c,l,y,p,v,b,d,s,w,_,A,m,h,U,j;return m=0,n<Or&&(m-=53,n=vr(t*=9007199254740992)),m+=(n>>20)-Ir|0,n=1072693248|(h=1048575&n|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,n-=Or),i=ir(o=(_=(t=Nr(t,n))-(c=Sr[U]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),a=Nr(0,e+=U<<18),w=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=ir(a=3+(u=i*i)+(w+=(f=A*(_-i*a-i*(t-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=ir(y=(_=i*a)+(A=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(A-(y-_))+Fr[U])-((b=ir(b=(p=.9617967009544373*y)+v+(l=Er[U])+(s=m),0))-s-l-p),r[0]=b,r[1]=d,r}(Cr,o,n);if(p=(t-(c=ir(t,0)))*b[0]+t*b[1],l=c*b[0],nr(qr,h=p+l),U=fr(qr[0]),j=fr(qr[1]),U>=Wr){if(0!=(U-Wr|j))return f*kr*kr;if(p+8008566259537294e-32>h-l)return f*kr*kr}else if((U&Vr)>=1083231232){if(0!=(U-3230714880|j))return f*Yr*Yr;if(p<=h-l)return f*Yr*Yr}return h=function(r,t,n){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&xr|0)>>20)-Ir|0,c=0,l>1071644672&&(o=Nr(0,((c=r+(Mr>>y+1)>>>0)&~(Lr>>(y=((c&xr)>>20)-Ir|0)))>>>0),c=(c&Lr|Mr)>>20-y>>>0,r<0&&(c=-c),t-=o),r=fr(r=vr(a=1-((a=(u=.6931471824645996*(o=ir(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):Nr(a,r)}(U,l,p),f*h}function Br(r,t){return y(r)||y(t)||t<0||t>1?NaN:r<0?0:r===s?1:1-zr(1-t,(r=p(r))+1)}function Dr(r){return y(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){return y(t)?NaN:t<0?0:t===s?1:(t=p(t),1-zr(1-r,t+1))};var t}l(Br,"factory",Dr),r.default=Br,r.factory=Dr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).cdf={});
//# sourceMappingURL=index.js.map
