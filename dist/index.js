"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=o(function(pe,V){V.exports={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308}});var p=o(function(qe,y){
var A=require('@stdlib/assert-is-plain-object/dist'),a=require('@stdlib/assert-has-own-property/dist'),F=require('@stdlib/assert-is-boolean/dist').isPrimitive,G=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,b=require('@stdlib/assert-is-string/dist').isPrimitive,I=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,C=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function J(e,r){return A(r)?a(r,"sep")&&(e.sep=r.sep,!b(e.sep))?new TypeError(u('0rt2W',"sep",e.sep)):a(r,"objectMode")&&(e.objectMode=r.objectMode,!F(e.objectMode))?new TypeError(u('0rt2o',"objectMode",e.objectMode)):a(r,"encoding")&&(e.encoding=r.encoding,!b(e.encoding)&&e.encoding!==null)?new TypeError(u('0rt7n',"encoding",e.encoding)):a(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!G(e.highWaterMark))?new TypeError(u('0rt4k',"highWaterMark",e.highWaterMark)):a(r,"iter")&&(e.iter=r.iter,!C(e.iter))?new TypeError(u('0rt2t',"iter",e.iter)):a(r,"siter")&&(e.siter=r.siter,!I(e.siter))?new TypeError(u('0rt3P',"siter",e.siter)):(a(r,"prng")&&(e.prng=r.prng),a(r,"seed")&&(e.seed=r.seed),a(r,"state")&&(e.state=r.state),a(r,"copy")&&(e.copy=r.copy),null):new TypeError(u('0rt2V',r));}y.exports=J
});var _=o(function(_e,q){
var z=require("debug"),B=z("random:streams:rayleigh");q.exports=B
});var v=o(function(we,O){
var M=require("readable-stream").Readable,D=require('@stdlib/assert-is-positive-number/dist').isPrimitive,U=require('@stdlib/assert-is-error/dist'),H=require('@stdlib/object-assign/dist'),K=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/utils-define-nonenumerable-property/dist'),s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=require('@stdlib/utils-define-read-only-accessor/dist'),Q=require('@stdlib/utils-define-read-write-accessor/dist'),X=require('@stdlib/random-base-rayleigh/dist').factory,j=require('@stdlib/buffer-from-string/dist'),Y=require('@stdlib/utils-next-tick/dist'),Z=require('@stdlib/error-tools-fmtprodmsg/dist'),$=m(),ee=p(),d=_();function re(){return this._prng.seed}function te(){return this._prng.seedLength}function ie(){return this._prng.stateLength}function ne(){return this._prng.byteLength}function ae(){return this._prng.state}function se(e){this._prng.state=e}function ue(){var e,r;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return d("Finished generating pseudorandom numbers."),this.push(null);r=this._prng(),d("Generated a new pseudorandom number. Value: %d. Iter: %d.",r,this._i),this._objectMode===!1&&(r=r.toString(),this._i===1?r=j(r):r=j(this._sep+r)),e=this.push(r),this._i%this._siter===0&&this.emit("state",this.state)}}function oe(e){var r;if(this._destroyed)return d("Attempted to destroy an already destroyed stream."),this;return r=this,this._destroyed=!0,Y(t),this;function t(){e&&(d("Stream was destroyed due to an error. Error: %s.",U(e)?e.message:JSON.stringify(e)),r.emit("error",e)),d("Closing the stream..."),r.emit("close")}}function i(e,r){var t,n;if(!(this instanceof i))return arguments.length>1?new i(e,r):new i(e);if(!D(e))throw new TypeError(Z('0rt71',e));if(t=H({},$),arguments.length>1&&(n=ee(t,r),n))throw n;return d("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),M.call(this,t),w(this,"_destroyed",!1),s(this,"_objectMode",t.objectMode),s(this,"_sep",t.sep),s(this,"_iter",t.iter),s(this,"_siter",t.siter),w(this,"_i",0),s(this,"_prng",X(e,t)),s(this,"PRNG",this._prng.PRNG),this}K(i,M);h(i.prototype,"seed",re);h(i.prototype,"seedLength",te);Q(i.prototype,"state",ae,se);h(i.prototype,"stateLength",ie);h(i.prototype,"byteLength",ne);s(i.prototype,"_read",ue);s(i.prototype,"destroy",oe);O.exports=i
});var E=o(function(je,S){
var de=require('@stdlib/assert-is-plain-object/dist'),ge=require('@stdlib/object-assign/dist'),he=require('@stdlib/error-tools-fmtprodmsg/dist'),ve=v();function ce(e,r){var t;if(arguments.length>1){if(t=r,!de(t))throw new TypeError(he('0rt2V',t));t=ge({},r)}else t={};return t.objectMode=!0,new ve(e,t)}S.exports=ce
});var k=o(function(Me,L){
var fe=require('@stdlib/assert-is-positive-number/dist').isPrimitive,P=require('@stdlib/assert-is-plain-object/dist'),T=require('@stdlib/object-assign/dist'),N=require('@stdlib/error-tools-fmtprodmsg/dist'),R=v();function le(e,r){var t,n,g;if(t=arguments.length,t>1){if(!P(r))throw new TypeError(N('0rt2V',r));g=l,n=T({},r)}else if(t===1)if(fe(e))g=l,n={};else{if(!P(e))throw new TypeError(N('0rt2V',e));n=T({},e),g=f}else n={},g=f;return g;function f(W){return new R(W,n)}function l(){return new R(e,n)}}L.exports=le
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),me=E(),be=k();x(c,"objectMode",me);x(c,"factory",be);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map