(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/Html.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.from.js");var _h5web_lib__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../packages/lib/src/vis/shared/VisCanvas.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/lib/src/vis/shared/Html.tsx"),react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js"),_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/decorators/FillHeight.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Default=function Default(props){var outside=props.outside,mounted=props.mounted,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(),2),outsideContainer=_useState2[0],setOutsideContainer=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(),2),portalContainer=_useState4[0],setPortalContainer=_useState4[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_h5web_lib__WEBPACK_IMPORTED_MODULE_11__.a,{abscissaConfig:{visDomain:[0,3]},ordinateConfig:{visDomain:[50,100]},children:[mounted&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_12__.a,{container:outside?outsideContainer:void 0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{ref:function ref(elem){return setPortalContainer(elem||void 0)},style:{position:"absolute",top:0,left:10},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("p",{children:["This ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("code",{children:"div"})," is rendered in a container"," ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("strong",{children:outside?"next to":"inside"})," VisCanvas."]})})}),portalContainer&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_12__.a,{children:Object(react_dom__WEBPACK_IMPORTED_MODULE_14__.createPortal)(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("p",{children:["This text is rendered in the ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("code",{children:"div"})," above with a portal."]}),portalContainer)})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{ref:function ref(elem){return elem&&setOutsideContainer(elem)}})]})};Default.args={outside:!1,mounted:!0},__webpack_exports__.default={title:"Building Blocks/Html",component:Default,parameters:{layout:"fullscreen"},decorators:[_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_15__.a]},Default.parameters=Object.assign({storySource:{source:"(props) => {\n  const { outside, mounted } = props;\n  const [outsideContainer, setOutsideContainer] = useState<HTMLDivElement>();\n  const [portalContainer, setPortalContainer] = useState<HTMLDivElement>();\n\n  return (\n    <>\n      <VisCanvas\n        abscissaConfig={{ visDomain: [0, 3] }}\n        ordinateConfig={{ visDomain: [50, 100] }}\n      >\n        {mounted && (\n          <Html container={outside ? outsideContainer : undefined}>\n            <div\n              ref={(elem) => setPortalContainer(elem || undefined)}\n              style={{ position: 'absolute', top: 0, left: 10 }}\n            >\n              <p>\n                This <code>div</code> is rendered in a container{' '}\n                <strong>{outside ? 'next to' : 'inside'}</strong> VisCanvas.\n              </p>\n            </div>\n          </Html>\n        )}\n        {portalContainer && (\n          <Html>\n            {createPortal(\n              <p>\n                This text is rendered in the <code>div</code> above with a\n                portal.\n              </p>,\n              portalContainer\n            )}\n          </Html>\n        )}\n      </VisCanvas>\n\n      <div ref={(elem) => elem && setOutsideContainer(elem)} />\n    </>\n  );\n}"}},Default.parameters)}}]);