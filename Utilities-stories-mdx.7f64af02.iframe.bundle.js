(window.webpackJsonp=window.webpackJsonp||[]).push([[41,36],{"../../node_modules/.pnpm/@storybook+addon-docs@6.4.19_pf3l7rh4vvjgkzngi53i6clspy/node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@6.4.19_pf3l7rh4vvjgkzngi53i6clspy/node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Primary})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Title}))},"../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/create-html.js":function(module,exports,__webpack_require__){var uncurryThis=__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/string-html-forced.js":function(module,exports,__webpack_require__){var fails=__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/function-uncurry-this.js"),$IndexOf=__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-method-is-strict.js"),un$IndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!un$IndexOf&&1/un$IndexOf([1],1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?un$IndexOf(this,searchElement,fromIndex)||0:$IndexOf(this,searchElement,fromIndex)}})},"./src/Utilities.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@1.6.22_react@17.0.2/node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@6.4.19_pf3l7rh4vvjgkzngi53i6clspy/node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,{title:"Utilities",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"utilities"},"Utilities"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"The library exposes a number of utility functions and custom React hooks, which are documented below."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"getdomain"},"getDomain"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Find the min and max values contained in a numeric array. The function supports plain arrays, typed arrays and ndarrays: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"number[]"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"TypedArray"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"NdArray<number[]>"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"NdArray<TypedArray>")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"scaleType")," is ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"ScaleType.Log")," and the domain crosses zero, clamp the min to the first strictly positive value or return ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"undefined")," if the domain is not supported (i.e. ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"[-x, 0]"),")."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"scaleType")," is ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"ScaleType.Sqrt")," and the domain crosses zero, clamp the min to the first positive value (including 0)."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"errorArray")," is provided, the returned domain will be computed for ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"values + errors")," and ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"values - errors"),".")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"getDomain(\n  valuesArray: AnyNumArray, // NdArray<TypedArray | number[]> | TypedArray | number[]\n  scaleType: ScaleType = ScaleType.Linear,\n  errorArray?: AnyNumArray\n): Domain | undefined\n\nconst linearDomain = getDomain([10, 5, -1]); // [-1, 10]\nconst logDomain = getDomain([-1, 2, 10], ScaleType.Log); // [2, 10]\n\nconst myArray = ndarray([0, 1, 2, 3], [2, 2]);\nconst myDomain = getDomain(myArray); // [0, 3]\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"getdomains"},"getDomains"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Find the domains of multiple numeric arrays. Useful when dealing with auxiliary curves."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"getDomains(\n  valuesArrays: AnyNumArray[],\n  scaleType: ScaleType = ScaleType.Linear\n): (Domain | undefined)[]\n\nconst linearDomains = getDomains([[-1, 5, 10], ndarray([0, 1, 2, 3], [2, 2])]); // [[-1, 10], [0, 3]]\nconst logDomains = getDomains([[-1, 5, 10], [0, 1, 2, 3]], ScaleType.Log); // [[5, 10], [1, 3]]\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"getcombineddomain"},"getCombinedDomain"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Combine multiple domains into one. Useful to find the overall domain of a line visualization with auxiliary curves."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"getCombinedDomain(domains: (Domain | undefined)[]): Domain | undefined\n\nconst combinedDomain = getCombinedDomain([[-1, 10], [0, 30]]]); // [-1, 30]\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"extenddomain"},"extendDomain"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Extend a domain by a factor in a given scale."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"extendDomain(domain: Domain, extendFactor: number, scaleType: ScaleType = ScaleType.Linear): Domain\n\nconst extendedDomain1 = extendDomain([0, 100], 0.5]); // [-50, 150]\nconst extendedDomain2 = extendDomain([10, 100], 1, ScaleType.Log); // approx. [1, 1000]\nconst extendedDomain3 = extendDomain([2, 2], 0.5); // [1, 3]\nconst extendedDomain4 = extendDomain([1, 1], 1, ScaleType.Log); // [0.1, 10]\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"getlineargradient"},"getLinearGradient"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Generate a CSS linear gradient for a given D3 interpolator, to be used as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"background-image"),". If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"minMaxOnly")," is ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"true"),", the gradient will include only two colours stops."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"getLinearGradient(interpolator: D3Interpolator, direction: 'top' | 'bottom' | 'right' | 'left', minMaxOnly = false): string\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"getvisdomain"},"getVisDomain"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Determine the domain to be used for the visualization based on a custom domain selected by the user. If a bound of the custom domain is ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"null"),", it falls back to the corresponding bound of the data domain."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"getVisDomain(customDomain: CustomDomain, dataDomain: Domain): Domain\n\nconst visDomain1 = getVisDomain([null, null], [0, 100]); // [0, 100]\nconst visDomain2 = getVisDomain([null, 20], [0, 100]); // [0, 20]\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"getsafedomain"},"getSafeDomain"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Make a domain safe in a given scale. This is typically called with a custom domain selected by the user (either directly or after calling ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"getVisDomain()"),").\nIf ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"domain")," is determined to be unsafe, a safe domain based on ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"fallbackDomain")," is returned along with an errors object. Note that ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"fallbackDomain")," is assumed to be safe in the given scale.\nThe domain is considered unsafe if it's inverted (",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"min > max"),"), or if the min and/or max bound is not supported by the scale."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"getSafeDomain(domain: Domain, fallbackDomain: Domain, scaleType: ScaleType): [Domain, DomainErrors]\n\nconst res1 = getSafeDomain([-10, 5], [1, 2], ScaleType.Linear); // [[-10, 5], {}]\nconst res2 = getSafeDomain([5, -10], [1, 2], ScaleType.Linear); // [[1, 2], { minGreater: true }]\nconst res3 = getSafeDomain([-1, 5], [1, 2], ScaleType.Sqrt); // [[1, 5], { minError: DomainError.InvalidMinWithScale }]\nconst res4 = getSafeDomain([-2, 0], [1, 2], ScaleType.Log); // [[1, 2], { minError: DomainError.InvalidMinWithScale, maxError: DomainError.InvalidMaxWithScale }]\nconst res5 = getSafeDomain([-5, 5], [10, 20], ScaleType.Log); // [[5, 5], { minError: DomainError.CustomMaxFallback }]\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"scalegamma"},"scaleGamma"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://airbnb.io/visx/docs/scale",target:"_blank",rel:"nofollow noopener noreferrer"},"@visx/scale"),"-like power scale that implements gamma correction. With ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"scaleGamma"),", the normalization happens ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},"before")," raising to the exponent, contrary to ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://github.com/d3/d3-scale/blob/main/README.md#scalePow",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"a"},"scalePower"))," where it happens ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},"after"),".\nImplements ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"domain"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"range"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"rangeRound"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"exponent"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"interpolate"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"clamp"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"nice"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"ticks"),", ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"tickFormat")," and ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"copy"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"scaleGamma(config?: ScaleGammaConfig): ScaleGamma\n\nconst scale = scaleGamma({\n    domain: Domain = [0, 1]\n    range: Domain = [0, 1],\n    exponent: number = 1,\n    clamp: boolean = false,\n});\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"getvaluetoindexscale"},"getValueToIndexScale"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Construct a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://github.com/d3/d3-scale/blob/main/README.md#scaleThreshold",target:"_blank",rel:"nofollow noopener noreferrer"},"threshold scale")," that returns the index of the closest value that is lower than a given value in the scale's input array."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"If the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"switchAtMidpoints")," parameter is set to ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"true")," when creating the scale, the thresholds become the midpoints between values in the input array (instead of the values themselves)."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"See ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://codesandbox.io/s/get-value-to-index-scale-2wm3hz",target:"_blank",rel:"nofollow noopener noreferrer"},"this sandbox")," for a graphical illustration of the scale."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"const values = [0, 2, 4, 6, 8, 10];\n\nconst scale = getValueToIndexScale(values);\n\nscale(0.5); // Returns 0\nscale(1.8); // Returns 0\nscale(2.2); // Returns 2\nscale(3); // Returns 2\n\nconst scaleWithMid = getValueToIndexScale(values, true);\n\nscaleWithMid(0.5); // Returns 0\nscaleWithMid(1.8); // Returns 1\nscaleWithMid(2.2); // Returns 1\nscaleWithMid(3); // Returns 3\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"getaxisvalues"},"getAxisValues"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Return an array of axis values of the desired length."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},"If an array is supplied, convert it to a plain JS array if needed and check that the lengths match."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},"If no array is supplied, generate a sequence of numbers from 0 to the desired length.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"getAxisValues(rawValues: NumArray | undefined, axisLength: number): number[]\n\ngetAxisValues(undefined, 3) // [0, 1, 2]\ngetAxisValues([-1, 0, 1], 3) // [-1, 0, 1]\ngetAxisValues(Float32Array([-1, 0, 1], 3) // [-1, 0, 1]\ngetAxisValues([0, 1], 3) // Throws error as 2 != 3.\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"hooks"},"Hooks"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"strong"},"useDomain(...args): Domain | undefined"))," - Memoised version of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"getDomain"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"strong"},"useDomains(...args): (Domain | undefined)[]"))," - Memoised version of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"getDomains"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"strong"},"useCombinedDomain(...args): Domain | undefined"))," - Memoised version of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"getCombinedDomain"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"strong"},"useVisDomain(...args): Domain"))," - Memoised version of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"getVisDomain"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"strong"},"useSafeDomain(...args): [Domain, DomainErrors]"))," - Memoised version of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"getSafeDomain"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"strong"},"useValueToIndexScale(..args): ScaleThreshold<number, number>"))," - Memoised version of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"getValueToIndexScale"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"strong"},"useAxisValues(..args): number[]"))," - Memoised version of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"li"},"getAxisValues"),".")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h4",{id:"usecanvasevents"},"useCanvasEvents"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Register event listeners on the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"canvas")," element. Useful to implement custom interactions. Must be called from a child component of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("inlineCode",{parentName:"p"},"VisCanvas"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"useCanvasEvents(callbacks: CanvasEventCallbacks): void\n\nconst handlePointerDown = useCallback((evt: CanvasEvent<PointerEvent>) => {\n  const { htmlPt, cameraPt, worldPt, dataPt, sourceEvent } = evt;\n  // ...\n}, []);\n\nuseCanvasEvents({ onPointerDown: handlePointerDown }); // also supported: `onPointerMove`, `onPointerUp` and `onWheel`\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",{id:"mock-data"},"Mock data"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"The library exposes a utility function to retrieve a mock entity's metadata and a mock dataset's value as ndarray for testing purposes.\nYou can browse through the available mock data at ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"https://h5web.panosc.eu/mock",target:"_blank",rel:"nofollow noopener noreferrer"},"https://h5web.panosc.eu/mock"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-ts"},"import { findMockEntity, getMockDataArray } from '@h5web/lib';\n\nconst entity = findMockEntity('/nD_datasets/twoD');\nconst dataArray = getMockDataArray('/nD_datasets/twoD');\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Utilities",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta}}]);