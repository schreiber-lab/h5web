(window.webpackJsonp=window.webpackJsonp||[]).push([[28,26],{"../../node_modules/.pnpm/css-loader@3.6.0_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../../node_modules/.pnpm/postcss-loader@4.3.0_postcss@7.0.39+webpack@4.46.0/node_modules/postcss-loader/dist/cjs.js?!../../packages/lib/src/toolbar/Toolbar.module.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("../../node_modules/.pnpm/css-loader@3.6.0_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".Toolbar-module__toolbar__1oTsO {\n  flex: 1 1;\n  position: relative; /* for `z-index` below, in case parent doesn't have `display: flex`*/\n  z-index: 1; /* for toolbar menus to appear above visualizations (overflow, selectors) */\n  display: flex;\n  min-width: 0;\n  height: 2.5rem;\n  padding: 0 0.5rem;\n  background-color: var(--h5w-toolbar--bgColor, aliceblue);\n  font-size: 0.875rem;\n}\n\n.Toolbar-module__controls__3xwm9 {\n  flex: 1 1;\n  display: flex;\n  justify-content: flex-end;\n  min-width: 0;\n}\n\n.Toolbar-module__controlWrapper__1SAyd[data-measured='false'] {\n  position: relative;\n  overflow: hidden; /* hide controls while they are being measured */\n}\n\n.Toolbar-module__controlWrapper__1SAyd[data-measured='false'] > .Toolbar-module__control__cCGUo {\n  position: absolute;\n}\n\n.Toolbar-module__controlWrapper__1SAyd,\n.Toolbar-module__control__cCGUo {\n  display: flex;\n}\n\n.Toolbar-module__sep__GletH {\n  margin: 0.375rem 0.25rem;\n  border-left: 1px solid var(--h5w-toolbar-separator--color, rgba(0, 0, 0, 0.2));\n}\n\n.Toolbar-module__btn__1nz5C {\n  display: flex;\n  align-items: center;\n  padding: 0 0.25rem;\n}\n\na.Toolbar-module__btn__1nz5C {\n  color: inherit;\n  text-decoration: none;\n}\n\n.Toolbar-module__btn__1nz5C[data-small] {\n  padding: 0 0.125rem;\n}\n\n.Toolbar-module__btnLike__1iM8w {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.875rem;\n  padding: 0 0.5rem;\n  border-radius: 0.5rem;\n  transition: background-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;\n  white-space: nowrap;\n}\n\n.Toolbar-module__btn__1nz5C[data-small] > .Toolbar-module__btnLike__1iM8w {\n  height: 1.75rem;\n  border-radius: 0.875rem;\n  font-size: 0.875em;\n}\n\n.Toolbar-module__btn__1nz5C[data-raised] > .Toolbar-module__btnLike__1iM8w {\n  box-shadow: 0 0 1px inset var(--h5w-btnRaised--shadowColor, gray),\n    -1px -1px 2px inset var(--h5w-btnRaised--shadowColor, gray);\n}\n\n.Toolbar-module__icon__sVGiU {\n  font-size: 1.5em;\n  padding-top: 1px;\n}\n\n.Toolbar-module__btn__1nz5C[data-small] .Toolbar-module__icon__sVGiU {\n  font-size: 1.375em;\n}\n\n.Toolbar-module__icon__sVGiU:not(:last-child) {\n  margin-right: 0.375rem;\n}\n\n.Toolbar-module__btn__1nz5C[data-small] .Toolbar-module__icon__sVGiU:not(:last-child) {\n  margin-right: 0.25rem;\n}\n\n.Toolbar-module__label__ngXQv {\n  margin-right: 0.125rem;\n  line-height: 1.5em;\n}\n\n.Toolbar-module__btn__1nz5C:hover > .Toolbar-module__btnLike__1iM8w {\n  background-color: var(--h5w-btn-hover--bgColor, whitesmoke);\n  box-shadow: -1px -1px 2px inset var(--h5w-btn-hover--shadowColor, var(--h5w-btnRaised--shadowColor, gray));\n}\n\n.Toolbar-module__btn__1nz5C[data-raised]:hover > .Toolbar-module__btnLike__1iM8w {\n  box-shadow: 0 0 1px inset var(--h5w-btnRaised-hover--shadowColor, dimgray),\n    -1px -1px 2px inset var(--h5w-btnRaised-hover--shadowColor, dimgray);\n}\n\n.Toolbar-module__btn__1nz5C:active > .Toolbar-module__btnLike__1iM8w,\n.Toolbar-module__btn__1nz5C[data-raised]:active > .Toolbar-module__btnLike__1iM8w,\n.Toolbar-module__btn__1nz5C[aria-pressed='true'] > .Toolbar-module__btnLike__1iM8w, \n.Toolbar-module__btn__1nz5C[aria-checked='true'] > .Toolbar-module__btnLike__1iM8w, \n.Toolbar-module__btn__1nz5C[aria-haspopup][aria-expanded='true'] > .Toolbar-module__btnLike__1iM8w  /* selectors and overflow menu buttons */ {\n  background-color: var(--h5w-btnPressed--bgColor, white);\n  box-shadow: 1px 1px 2px inset\n    var(--h5w-btnPressed--shadowColor, var(--h5w-btnRaised--shadowColor, gray));\n}\n\n.Toolbar-module__btn__1nz5C[aria-pressed='true']:hover > .Toolbar-module__btnLike__1iM8w,\n.Toolbar-module__btn__1nz5C[aria-checked='true']:hover > .Toolbar-module__btnLike__1iM8w,\n.Toolbar-module__btn__1nz5C[aria-haspopup][aria-expanded='true']:hover > .Toolbar-module__btnLike__1iM8w {\n  box-shadow: 1px 1px 2px inset\n    var(\n      --h5w-btnPressed-hover--shadowColor,\n      var(--h5w-btnRaised-hover--shadowColor, dimgray)\n    );\n}\n\n.Toolbar-module__popup__1FhfV {\n  position: absolute;\n  bottom: 1px; /* guarantees overlap with toolbar for hover-only popup */\n  padding-top: calc(0.375rem + 1px);\n  transform: translateY(100%);\n}\n\n.Toolbar-module__popupInner__2eLJ- {\n  background-color: var(\n    --h5w-domainSlider-tooltip--bgColor,\n    rgba(255, 255, 255, 0.9)\n  );\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0.1) 0px 4px 11px;\n}\n",""]),exports.locals={toolbar:"Toolbar-module__toolbar__1oTsO",controls:"Toolbar-module__controls__3xwm9",controlWrapper:"Toolbar-module__controlWrapper__1SAyd",control:"Toolbar-module__control__cCGUo",sep:"Toolbar-module__sep__GletH",btn:"Toolbar-module__btn__1nz5C btnClean",btnLike:"Toolbar-module__btnLike__1iM8w",icon:"Toolbar-module__icon__sVGiU",label:"Toolbar-module__label__ngXQv",popup:"Toolbar-module__popup__1FhfV",popupInner:"Toolbar-module__popupInner__2eLJ-"},module.exports=exports},"../../node_modules/.pnpm/css-loader@3.6.0_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../../node_modules/.pnpm/postcss-loader@4.3.0_postcss@7.0.39+webpack@4.46.0/node_modules/postcss-loader/dist/cjs.js?!../../packages/lib/src/toolbar/floating/ResetZoomButton.module.css":function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__("../../node_modules/.pnpm/css-loader@3.6.0_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_ICSS_IMPORT_0___=__webpack_require__("../../node_modules/.pnpm/css-loader@3.6.0_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../../node_modules/.pnpm/postcss-loader@4.3.0_postcss@7.0.39+webpack@4.46.0/node_modules/postcss-loader/dist/cjs.js?!../../packages/lib/src/toolbar/Toolbar.module.css");(exports=___CSS_LOADER_API_IMPORT___(!1)).i(___CSS_LOADER_ICSS_IMPORT_0___,"",!0),exports.push([module.i,".ResetZoomButton-module__btn__1GnTK {\n  padding: 0.5rem !important; /* FIX style ordering issue with Vite */\n  font-size: 0.75em;\n}\n\n.ResetZoomButton-module__btn__1GnTK[hidden] {\n  display: none;\n}\n\n.ResetZoomButton-module__btnLike__1aZrK {\n  height: 1.625rem !important;\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0.1) 0px 4px 11px;\n}\n",""]),exports.locals={btn:"ResetZoomButton-module__btn__1GnTK "+___CSS_LOADER_ICSS_IMPORT_0___.locals.btn,btnLike:"ResetZoomButton-module__btnLike__1aZrK "+___CSS_LOADER_ICSS_IMPORT_0___.locals.btnLike},module.exports=exports},"../../packages/lib/src/interactions/Pan.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.string.sub.js");var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_03d4586416b86b800151bd7390b3d95a/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts");function Pan(props){var shouldInteract=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__.c)("Pan",props),camera=Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.d)((function(state){return state.camera})),startOffsetPosition=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(),moveCameraTo=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__.b)(),onPointerDown=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(evt){var unprojectedPoint=evt.unprojectedPoint,sourceEvent=evt.sourceEvent,target=sourceEvent.target,pointerId=sourceEvent.pointerId;shouldInteract(sourceEvent)&&(target.setPointerCapture(pointerId),startOffsetPosition.current=unprojectedPoint.clone())}),[shouldInteract]),onPointerUp=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(evt){var sourceEvent=evt.sourceEvent,target=sourceEvent.target,pointerId=sourceEvent.pointerId;target.releasePointerCapture(pointerId),startOffsetPosition.current=void 0}),[]),onPointerMove=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(evt){var unprojectedPoint=evt.unprojectedPoint,sourceEvent=evt.sourceEvent;if(startOffsetPosition.current){sourceEvent.stopPropagation();var delta=startOffsetPosition.current.clone().sub(unprojectedPoint),target=camera.position.clone().add(delta);moveCameraTo(target.x,target.y)}}),[camera,moveCameraTo]);return Object(_hooks__WEBPACK_IMPORTED_MODULE_3__.a)({onPointerDown:onPointerDown,onPointerMove:onPointerMove,onPointerUp:onPointerUp}),null}__webpack_exports__.a=Pan;try{Pan.displayName="Pan",Pan.__docgenInfo={description:"",displayName:"Pan",props:{modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"enum",value:[{value:'"Alt"'},{value:'"Control"'},{value:'"Shift"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/Pan.tsx#Pan"]={docgenInfo:Pan.__docgenInfo,name:"Pan",path:"../../packages/lib/src/interactions/Pan.tsx#Pan"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/XAxisZoom.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var _hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts");function XAxisZoom(props){var shouldInteract=Object(_hooks__WEBPACK_IMPORTED_MODULE_0__.c)("XAxisZoom",props);return Object(_hooks__WEBPACK_IMPORTED_MODULE_0__.a)({onWheel:Object(_hooks__WEBPACK_IMPORTED_MODULE_0__.d)((function isZoomAllowed(sourceEvent){return{x:shouldInteract(sourceEvent),y:!1}}))}),null}__webpack_exports__.a=XAxisZoom;try{XAxisZoom.displayName="XAxisZoom",XAxisZoom.__docgenInfo={description:"",displayName:"XAxisZoom",props:{modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"enum",value:[{value:'"Alt"'},{value:'"Control"'},{value:'"Shift"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/XAxisZoom.tsx#XAxisZoom"]={docgenInfo:XAxisZoom.__docgenInfo,name:"XAxisZoom",path:"../../packages/lib/src/interactions/XAxisZoom.tsx#XAxisZoom"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/toolbar/floating/FloatingControl.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js"),_vis_shared_AxisSystemContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/lib/src/vis/shared/AxisSystemContext.tsx"),_vis_shared_Html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/vis/shared/Html.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function FloatingControl(props){var children=props.children,floatingToolbar=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_vis_shared_AxisSystemContext__WEBPACK_IMPORTED_MODULE_2__.a).floatingToolbar;return floatingToolbar?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vis_shared_Html__WEBPACK_IMPORTED_MODULE_3__.a,{children:Object(react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,floatingToolbar)}):null}FloatingControl.displayName="FloatingControl",__webpack_exports__.a=FloatingControl;try{FloatingControl.displayName="FloatingControl",FloatingControl.__docgenInfo={description:"",displayName:"FloatingControl",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/toolbar/floating/FloatingControl.tsx#FloatingControl"]={docgenInfo:FloatingControl.__docgenInfo,name:"FloatingControl",path:"../../packages/lib/src/toolbar/floating/FloatingControl.tsx#FloatingControl"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/toolbar/floating/ResetZoomButton.module.css":function(module,exports,__webpack_require__){var api=__webpack_require__("../../node_modules/.pnpm/style-loader@1.3.0_webpack@4.46.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("../../node_modules/.pnpm/css-loader@3.6.0_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../../node_modules/.pnpm/postcss-loader@4.3.0_postcss@7.0.39+webpack@4.46.0/node_modules/postcss-loader/dist/cjs.js?!../../packages/lib/src/toolbar/floating/ResetZoomButton.module.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"../../packages/lib/src/toolbar/floating/ResetZoomButton.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.from.js");var _react_three_fiber__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_03d4586416b86b800151bd7390b3d95a/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_interactions_hooks__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),_FloatingControl__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../packages/lib/src/toolbar/floating/FloatingControl.tsx"),_ResetZoomButton_module_css__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../packages/lib/src/toolbar/floating/ResetZoomButton.module.css"),_ResetZoomButton_module_css__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_ResetZoomButton_module_css__WEBPACK_IMPORTED_MODULE_14__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ResetZoomButton(){var camera=Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_10__.d)((function(state){return state.camera})),moveCameraTo=Object(_interactions_hooks__WEBPACK_IMPORTED_MODULE_12__.b)(),_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_11__.useState)(!1),2),isVisible=_useState2[0],setVisible=_useState2[1];return Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_10__.c)((function(){var isZoomedIn=camera.scale.x<1||camera.scale.y<1;isVisible!==isZoomedIn&&setVisible(isZoomedIn)})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_FloatingControl__WEBPACK_IMPORTED_MODULE_13__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("button",{className:_ResetZoomButton_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.btn,type:"button",hidden:!isVisible,onClick:function onClick(){return function resetZoom(){camera.scale.x=1,camera.scale.y=1,camera.updateProjectionMatrix(),camera.updateMatrixWorld(),moveCameraTo(0,0)}()},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span",{className:_ResetZoomButton_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.btnLike,children:"Reset zoom"})})})}ResetZoomButton.displayName="ResetZoomButton",__webpack_exports__.a=ResetZoomButton},"./src/VisCanvas.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"IndexDomains",(function(){return IndexDomains})),__webpack_require__.d(__webpack_exports__,"ArbitraryDomains",(function(){return ArbitraryDomains})),__webpack_require__.d(__webpack_exports__,"LogScales",(function(){return LogScales})),__webpack_require__.d(__webpack_exports__,"AspectRatio",(function(){return AspectRatio})),__webpack_require__.d(__webpack_exports__,"NoGrid",(function(){return NoGrid})),__webpack_require__.d(__webpack_exports__,"Title",(function(){return Title})),__webpack_require__.d(__webpack_exports__,"AxisLabels",(function(){return AxisLabels})),__webpack_require__.d(__webpack_exports__,"FlippedAxes",(function(){return FlippedAxes})),__webpack_require__.d(__webpack_exports__,"InheritedStyles",(function(){return InheritedStyles}));__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js");var _h5web_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/src/vis/shared/VisCanvas.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/shared/src/models-vis.ts"),_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/decorators/FillHeight.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},args))};Template.displayName="Template";var IndexDomains=Template.bind({});IndexDomains.args={abscissaConfig:{visDomain:[0,3],showGrid:!0,isIndexAxis:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0,isIndexAxis:!0}};var ArbitraryDomains=Template.bind({});ArbitraryDomains.args={abscissaConfig:{visDomain:[0,3],showGrid:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0}};var LogScales=Template.bind({});LogScales.args={abscissaConfig:{visDomain:[1,10],showGrid:!0,scaleType:_h5web_lib__WEBPACK_IMPORTED_MODULE_2__.a.Log},ordinateConfig:{visDomain:[-10,10],showGrid:!0,scaleType:_h5web_lib__WEBPACK_IMPORTED_MODULE_2__.a.SymLog}};var AspectRatio=Template.bind({});AspectRatio.args={abscissaConfig:{visDomain:[0,16],showGrid:!0,isIndexAxis:!0},ordinateConfig:{visDomain:[0,10],showGrid:!0,isIndexAxis:!0},canvasRatio:1.6};var NoGrid=Template.bind({});NoGrid.args={abscissaConfig:{visDomain:[-5,20],showGrid:!1,isIndexAxis:!0},ordinateConfig:{visDomain:[0,2],showGrid:!1}};var Title=Template.bind({});Title.args={abscissaConfig:{visDomain:[0,3],showGrid:!0,isIndexAxis:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0,isIndexAxis:!0},title:"This is a graph"};var AxisLabels=Template.bind({});AxisLabels.args={abscissaConfig:{visDomain:[0,3],showGrid:!0,label:"Abscissas"},ordinateConfig:{visDomain:[50,100],showGrid:!0,label:"Ordinates"}};var FlippedAxes=Template.bind({});FlippedAxes.args={abscissaConfig:{visDomain:[0,3],showGrid:!0,flip:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0,flip:!0}};var InheritedStyles=Template.bind({});InheritedStyles.args={abscissaConfig:{visDomain:[0,50],showGrid:!0,isIndexAxis:!0,label:"X values"},ordinateConfig:{visDomain:[0,3],showGrid:!0,isIndexAxis:!0,label:"Y values"},title:"The title"},InheritedStyles.decorators=[function(VisCanvasStory){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{flex:"1 1 0%",display:"flex",fontFamily:"monospace",fontWeight:"bold",fontSize:"1.125rem"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(VisCanvasStory,{})})}],__webpack_exports__.default={title:"Building Blocks/VisCanvas",component:_h5web_lib__WEBPACK_IMPORTED_MODULE_1__.a,parameters:{layout:"fullscreen"},decorators:[_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_3__.a]},IndexDomains.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},IndexDomains.parameters),ArbitraryDomains.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},ArbitraryDomains.parameters),LogScales.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},LogScales.parameters),AspectRatio.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},AspectRatio.parameters),NoGrid.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},NoGrid.parameters),Title.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},Title.parameters),AxisLabels.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},AxisLabels.parameters),FlippedAxes.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},FlippedAxes.parameters),InheritedStyles.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},InheritedStyles.parameters)},"./src/XZoom.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled})),__webpack_require__.d(__webpack_exports__,"ModifierKey",(function(){return ModifierKey}));__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js");var _h5web_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/src/vis/shared/VisCanvas.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/lib/src/interactions/Pan.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/interactions/XAxisZoom.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/lib/src/toolbar/floating/ResetZoomButton.tsx"),_VisCanvas_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/VisCanvas.stories.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_h5web_lib__WEBPACK_IMPORTED_MODULE_1__.a,{abscissaConfig:{visDomain:[-10,0],showGrid:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_2__.a,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args)),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_4__.a,{})]})};Template.displayName="Template";var Default=Template.bind({});Default.args={disabled:!1,modifierKey:"Alt"};var Disabled=Template.bind({});Disabled.args={disabled:!0,modifierKey:"Alt"};var ModifierKey=Template.bind({});ModifierKey.args={disabled:!1,modifierKey:"Shift"},__webpack_exports__.default=Object.assign({},_VisCanvas_stories__WEBPACK_IMPORTED_MODULE_5__.default,{title:"Building Blocks/PanZoom/X Zoom",parameters:Object.assign({},_VisCanvas_stories__WEBPACK_IMPORTED_MODULE_5__.default.parameters,{controls:{include:["disabled","modifierKey"]}}),argTypes:{modifierKey:{control:{type:"inline-radio"},options:["Alt","Control","Shift"]}}}),Default.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <VisCanvas\n      abscissaConfig={{ visDomain: [-10, 0], showGrid: true }}\n      ordinateConfig={{ visDomain: [50, 100], showGrid: true }}\n    >\n      <Pan />\n      <XAxisZoom {...args} />\n      <ResetZoomButton />\n    </VisCanvas>\n  );\n}"}},Default.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <VisCanvas\n      abscissaConfig={{ visDomain: [-10, 0], showGrid: true }}\n      ordinateConfig={{ visDomain: [50, 100], showGrid: true }}\n    >\n      <Pan />\n      <XAxisZoom {...args} />\n      <ResetZoomButton />\n    </VisCanvas>\n  );\n}"}},Disabled.parameters),ModifierKey.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <VisCanvas\n      abscissaConfig={{ visDomain: [-10, 0], showGrid: true }}\n      ordinateConfig={{ visDomain: [50, 100], showGrid: true }}\n    >\n      <Pan />\n      <XAxisZoom {...args} />\n      <ResetZoomButton />\n    </VisCanvas>\n  );\n}"}},ModifierKey.parameters)}}]);