(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1568,9604],{"../../node_modules/.pnpm/@storybook+addon-docs@6.5.9_72wjk32secgr3i6kmmvxjjxtom/node_modules/@storybook/addon-docs/dist/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Dx:function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Title},aT:function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext},h_:function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta},sq:function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Primary}});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@6.5.9_72wjk32secgr3i6kmmvxjjxtom/node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/Context.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page}});__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@17.0.2/node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@6.5.9_72wjk32secgr3i6kmmvxjjxtom/node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Context",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("h2",null,"Context"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("p",null,"Children of ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"p"},"VisCanvas")," have access to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"p"},"AxisSystemContext"),", which provides helpful utilities to convert vectors from data space to world space and back.\nIt also exposes the size of the visualization and the axis configs passed to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"p"},"VisCanvas")," for convenience."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("p",null,"Consumers of ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"p"},"AxisSystemContext")," re-render ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("strong",{parentName:"p"},"whenever the size of the canvas changes"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("code",{parentName:"pre",className:"language-ts"},"useAxisSystemContext(): AxisSystemContextValue\n\nconst { visSize, dataToWorld, worldToData } = useAxisSystemContext();\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("th",{parentName:"tr",align:null},"Name"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("th",{parentName:"tr",align:null},"Description"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("th",{parentName:"tr",align:null},"Type"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"visSize")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},"Visualization size (different from canvas size on ratio-constrained visualizations, like ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"HeatmapVis"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("code",null,"Size"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"abscissaConfig")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},"Abscissa configuration object passed to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"VisCanvas")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("code",null,"AxisConfig"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"ordinateConfig")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},"Ordinate configuration object passed to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"VisCanvas")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("code",null,"AxisConfig"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"abscissaScale")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},"Computes the X coordinate in world space of a given abscissa value (or the opposite with ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"abscissaScale.invert()"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("code",null,"AxisScale"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"ordinateScale")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},"Computes the Y coordinate in world space of a given ordinate value (or the opposite with ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"ordinateScale.invert()"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("code",null,"AxisScale"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"dataToWorld")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},"Converts a vector from data space to world space (calls ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"abscissaScale()")," and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"ordinateScale"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("code",null,"(vec: Vector2 ","|"," Vector3) => Vector2"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"worldToData")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},"Converts a vector from world space to data space (calls ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"abscissaScale.invert()")," and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("inlineCode",{parentName:"td"},"ordinateScale.invert"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("td",{parentName:"tr",align:null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("code",null,"(vec: Vector2 ","|"," Vector3) => Vector2"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("p",{parentName:"blockquote"},"This table is not exhaustive. Please consider any undocumented property as experimental or meant for internal use only.")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Context",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)(MDXContent,null))}}),__webpack_exports__.default=componentMeta;var __namedExportsOrder=["__page"]},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/array-buffer-native.js":function(module){module.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/array-buffer.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var global=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/global.js"),uncurryThis=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/function-uncurry-this.js"),DESCRIPTORS=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/descriptors.js"),NATIVE_ARRAY_BUFFER=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/array-buffer-native.js"),FunctionName=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/function-name.js"),createNonEnumerableProperty=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/create-non-enumerable-property.js"),defineBuiltIns=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/define-built-ins.js"),fails=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/fails.js"),anInstance=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/an-instance.js"),toIntegerOrInfinity=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/to-integer-or-infinity.js"),toLength=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/to-length.js"),toIndex=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/to-index.js"),IEEE754=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/ieee754.js"),getPrototypeOf=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/object-get-prototype-of.js"),setPrototypeOf=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/object-set-prototype-of.js"),getOwnPropertyNames=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/object-get-own-property-names.js").f,defineProperty=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/object-define-property.js").f,arrayFill=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/array-fill.js"),arraySlice=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/array-slice-simple.js"),setToStringTag=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/set-to-string-tag.js"),InternalStateModule=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/internal-state.js"),PROPER_FUNCTION_NAME=FunctionName.PROPER,CONFIGURABLE_FUNCTION_NAME=FunctionName.CONFIGURABLE,getInternalState=InternalStateModule.get,setInternalState=InternalStateModule.set,NativeArrayBuffer=global.ArrayBuffer,$ArrayBuffer=NativeArrayBuffer,ArrayBufferPrototype=$ArrayBuffer&&$ArrayBuffer.prototype,$DataView=global.DataView,DataViewPrototype=$DataView&&$DataView.prototype,ObjectPrototype=Object.prototype,Array=global.Array,RangeError=global.RangeError,fill=uncurryThis(arrayFill),reverse=uncurryThis([].reverse),packIEEE754=IEEE754.pack,unpackIEEE754=IEEE754.unpack,packInt8=function(number){return[255&number]},packInt16=function(number){return[255&number,number>>8&255]},packInt32=function(number){return[255&number,number>>8&255,number>>16&255,number>>24&255]},unpackInt32=function(buffer){return buffer[3]<<24|buffer[2]<<16|buffer[1]<<8|buffer[0]},packFloat32=function(number){return packIEEE754(number,23,4)},packFloat64=function(number){return packIEEE754(number,52,8)},addGetter=function(Constructor,key){defineProperty(Constructor.prototype,key,{get:function(){return getInternalState(this)[key]}})},get=function(view,count,index,isLittleEndian){var intIndex=toIndex(index),store=getInternalState(view);if(intIndex+count>store.byteLength)throw RangeError("Wrong index");var bytes=getInternalState(store.buffer).bytes,start=intIndex+store.byteOffset,pack=arraySlice(bytes,start,start+count);return isLittleEndian?pack:reverse(pack)},set=function(view,count,index,conversion,value,isLittleEndian){var intIndex=toIndex(index),store=getInternalState(view);if(intIndex+count>store.byteLength)throw RangeError("Wrong index");for(var bytes=getInternalState(store.buffer).bytes,start=intIndex+store.byteOffset,pack=conversion(+value),i=0;i<count;i++)bytes[start+i]=pack[isLittleEndian?i:count-i-1]};if(NATIVE_ARRAY_BUFFER){var INCORRECT_ARRAY_BUFFER_NAME=PROPER_FUNCTION_NAME&&"ArrayBuffer"!==NativeArrayBuffer.name;if(fails((function(){NativeArrayBuffer(1)}))&&fails((function(){new NativeArrayBuffer(-1)}))&&!fails((function(){return new NativeArrayBuffer,new NativeArrayBuffer(1.5),new NativeArrayBuffer(NaN),INCORRECT_ARRAY_BUFFER_NAME&&!CONFIGURABLE_FUNCTION_NAME})))INCORRECT_ARRAY_BUFFER_NAME&&CONFIGURABLE_FUNCTION_NAME&&createNonEnumerableProperty(NativeArrayBuffer,"name","ArrayBuffer");else{($ArrayBuffer=function ArrayBuffer(length){return anInstance(this,ArrayBufferPrototype),new NativeArrayBuffer(toIndex(length))}).prototype=ArrayBufferPrototype;for(var key,keys=getOwnPropertyNames(NativeArrayBuffer),j=0;keys.length>j;)(key=keys[j++])in $ArrayBuffer||createNonEnumerableProperty($ArrayBuffer,key,NativeArrayBuffer[key]);ArrayBufferPrototype.constructor=$ArrayBuffer}setPrototypeOf&&getPrototypeOf(DataViewPrototype)!==ObjectPrototype&&setPrototypeOf(DataViewPrototype,ObjectPrototype);var testView=new $DataView(new $ArrayBuffer(2)),$setInt8=uncurryThis(DataViewPrototype.setInt8);testView.setInt8(0,2147483648),testView.setInt8(1,2147483649),!testView.getInt8(0)&&testView.getInt8(1)||defineBuiltIns(DataViewPrototype,{setInt8:function setInt8(byteOffset,value){$setInt8(this,byteOffset,value<<24>>24)},setUint8:function setUint8(byteOffset,value){$setInt8(this,byteOffset,value<<24>>24)}},{unsafe:!0})}else ArrayBufferPrototype=($ArrayBuffer=function ArrayBuffer(length){anInstance(this,ArrayBufferPrototype);var byteLength=toIndex(length);setInternalState(this,{bytes:fill(Array(byteLength),0),byteLength:byteLength}),DESCRIPTORS||(this.byteLength=byteLength)}).prototype,DataViewPrototype=($DataView=function DataView(buffer,byteOffset,byteLength){anInstance(this,DataViewPrototype),anInstance(buffer,ArrayBufferPrototype);var bufferLength=getInternalState(buffer).byteLength,offset=toIntegerOrInfinity(byteOffset);if(offset<0||offset>bufferLength)throw RangeError("Wrong offset");if(offset+(byteLength=void 0===byteLength?bufferLength-offset:toLength(byteLength))>bufferLength)throw RangeError("Wrong length");setInternalState(this,{buffer:buffer,byteLength:byteLength,byteOffset:offset}),DESCRIPTORS||(this.buffer=buffer,this.byteLength=byteLength,this.byteOffset=offset)}).prototype,DESCRIPTORS&&(addGetter($ArrayBuffer,"byteLength"),addGetter($DataView,"buffer"),addGetter($DataView,"byteLength"),addGetter($DataView,"byteOffset")),defineBuiltIns(DataViewPrototype,{getInt8:function getInt8(byteOffset){return get(this,1,byteOffset)[0]<<24>>24},getUint8:function getUint8(byteOffset){return get(this,1,byteOffset)[0]},getInt16:function getInt16(byteOffset){var bytes=get(this,2,byteOffset,arguments.length>1?arguments[1]:void 0);return(bytes[1]<<8|bytes[0])<<16>>16},getUint16:function getUint16(byteOffset){var bytes=get(this,2,byteOffset,arguments.length>1?arguments[1]:void 0);return bytes[1]<<8|bytes[0]},getInt32:function getInt32(byteOffset){return unpackInt32(get(this,4,byteOffset,arguments.length>1?arguments[1]:void 0))},getUint32:function getUint32(byteOffset){return unpackInt32(get(this,4,byteOffset,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function getFloat32(byteOffset){return unpackIEEE754(get(this,4,byteOffset,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function getFloat64(byteOffset){return unpackIEEE754(get(this,8,byteOffset,arguments.length>1?arguments[1]:void 0),52)},setInt8:function setInt8(byteOffset,value){set(this,1,byteOffset,packInt8,value)},setUint8:function setUint8(byteOffset,value){set(this,1,byteOffset,packInt8,value)},setInt16:function setInt16(byteOffset,value){set(this,2,byteOffset,packInt16,value,arguments.length>2?arguments[2]:void 0)},setUint16:function setUint16(byteOffset,value){set(this,2,byteOffset,packInt16,value,arguments.length>2?arguments[2]:void 0)},setInt32:function setInt32(byteOffset,value){set(this,4,byteOffset,packInt32,value,arguments.length>2?arguments[2]:void 0)},setUint32:function setUint32(byteOffset,value){set(this,4,byteOffset,packInt32,value,arguments.length>2?arguments[2]:void 0)},setFloat32:function setFloat32(byteOffset,value){set(this,4,byteOffset,packFloat32,value,arguments.length>2?arguments[2]:void 0)},setFloat64:function setFloat64(byteOffset,value){set(this,8,byteOffset,packFloat64,value,arguments.length>2?arguments[2]:void 0)}});setToStringTag($ArrayBuffer,"ArrayBuffer"),setToStringTag($DataView,"DataView"),module.exports={ArrayBuffer:$ArrayBuffer,DataView:$DataView}},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/create-html.js":function(module,__unused_webpack_exports,__webpack_require__){var uncurryThis=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/ieee754.js":function(module){var $Array=Array,abs=Math.abs,pow=Math.pow,floor=Math.floor,log=Math.log,LN2=Math.LN2;module.exports={pack:function(number,mantissaLength,bytes){var exponent,mantissa,c,buffer=$Array(bytes),exponentLength=8*bytes-mantissaLength-1,eMax=(1<<exponentLength)-1,eBias=eMax>>1,rt=23===mantissaLength?pow(2,-24)-pow(2,-77):0,sign=number<0||0===number&&1/number<0?1:0,index=0;for((number=abs(number))!=number||number===1/0?(mantissa=number!=number?1:0,exponent=eMax):(exponent=floor(log(number)/LN2),number*(c=pow(2,-exponent))<1&&(exponent--,c*=2),(number+=exponent+eBias>=1?rt/c:rt*pow(2,1-eBias))*c>=2&&(exponent++,c/=2),exponent+eBias>=eMax?(mantissa=0,exponent=eMax):exponent+eBias>=1?(mantissa=(number*c-1)*pow(2,mantissaLength),exponent+=eBias):(mantissa=number*pow(2,eBias-1)*pow(2,mantissaLength),exponent=0));mantissaLength>=8;)buffer[index++]=255&mantissa,mantissa/=256,mantissaLength-=8;for(exponent=exponent<<mantissaLength|mantissa,exponentLength+=mantissaLength;exponentLength>0;)buffer[index++]=255&exponent,exponent/=256,exponentLength-=8;return buffer[--index]|=128*sign,buffer},unpack:function(buffer,mantissaLength){var mantissa,bytes=buffer.length,exponentLength=8*bytes-mantissaLength-1,eMax=(1<<exponentLength)-1,eBias=eMax>>1,nBits=exponentLength-7,index=bytes-1,sign=buffer[index--],exponent=127&sign;for(sign>>=7;nBits>0;)exponent=256*exponent+buffer[index--],nBits-=8;for(mantissa=exponent&(1<<-nBits)-1,exponent>>=-nBits,nBits+=mantissaLength;nBits>0;)mantissa=256*mantissa+buffer[index--],nBits-=8;if(0===exponent)exponent=1-eBias;else{if(exponent===eMax)return mantissa?NaN:sign?-1/0:1/0;mantissa+=pow(2,mantissaLength),exponent-=eBias}return(sign?-1:1)*mantissa*pow(2,exponent-mantissaLength)}}},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/string-html-forced.js":function(module,__unused_webpack_exports,__webpack_require__){var fails=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/to-index.js":function(module,__unused_webpack_exports,__webpack_require__){var toIntegerOrInfinity=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/to-integer-or-infinity.js"),toLength=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/to-length.js"),$RangeError=RangeError;module.exports=function(it){if(void 0===it)return 0;var number=toIntegerOrInfinity(it),length=toLength(number);if(number!==length)throw $RangeError("Wrong length or index");return length}},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.index-of.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){"use strict";var $=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/function-uncurry-this.js"),$IndexOf=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/array-method-is-strict.js"),un$IndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!un$IndexOf&&1/un$IndexOf([1],1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?un$IndexOf(this,searchElement,fromIndex)||0:$IndexOf(this,searchElement,fromIndex)}})}}]);