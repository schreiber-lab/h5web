"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7425],{"../../packages/lib/src/interactions/SelectToZoom.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return interactions_SelectToZoom}});__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js");var react_three_fiber_esm=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_apkfqzawxbvyaakrxvzzbm6zli/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),hooks=__webpack_require__("../../packages/lib/src/vis/hooks.ts"),AxisSystemProvider=__webpack_require__("../../packages/lib/src/vis/shared/AxisSystemProvider.tsx"),utils=__webpack_require__("../../packages/lib/src/vis/utils.ts"),SelectionRect=__webpack_require__("../../packages/lib/src/interactions/SelectionRect.tsx"),interactions_utils=__webpack_require__("../../packages/lib/src/interactions/utils.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["startPoint","endPoint","ratio"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function RatioSelectionRect(props){var startPoint=props.startPoint,endPoint=props.endPoint,ratio=props.ratio,svgProps=_objectWithoutProperties(props,_excluded),_useAxisSystemContext=(0,AxisSystemProvider.e)(),dataToWorld=_useAxisSystemContext.dataToWorld,worldToData=_useAxisSystemContext.worldToData,visSize=_useAxisSystemContext.visSize,_getRatioRespectingRe2=_slicedToArray((0,interactions_utils.Nm)(startPoint,endPoint,ratio),2),ratioStartPoint=_getRatioRespectingRe2[0],ratioEndPoint=_getRatioRespectingRe2[1],_clampRectangleToVis2=_slicedToArray((0,interactions_utils.iI)(dataToWorld(ratioStartPoint),dataToWorld(ratioEndPoint),visSize),2),newStartPoint=_clampRectangleToVis2[0],newEndPoint=_clampRectangleToVis2[1];return(0,jsx_runtime.jsx)(SelectionRect.Z,Object.assign({startPoint:worldToData(newStartPoint),endPoint:worldToData(newEndPoint)},svgProps))}RatioSelectionRect.displayName="RatioSelectionRect";var interactions_RatioSelectionRect=RatioSelectionRect;try{RatioSelectionRect.displayName="RatioSelectionRect",RatioSelectionRect.__docgenInfo={description:"",displayName:"RatioSelectionRect",props:{startPoint:{defaultValue:null,description:"",name:"startPoint",required:!0,type:{name:"Vector2"}},endPoint:{defaultValue:null,description:"",name:"endPoint",required:!0,type:{name:"Vector2"}},ratio:{defaultValue:null,description:"",name:"ratio",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/RatioSelectionRect.tsx#RatioSelectionRect"]={docgenInfo:RatioSelectionRect.__docgenInfo,name:"RatioSelectionRect",path:"../../packages/lib/src/interactions/RatioSelectionRect.tsx#RatioSelectionRect"})}catch(__react_docgen_typescript_loader_error){}var SelectionTool=__webpack_require__("../../packages/lib/src/interactions/SelectionTool.tsx"),interactions_hooks=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),SelectToZoom_excluded=["keepRatio"];function SelectToZoom_slicedToArray(arr,i){return function SelectToZoom_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function SelectToZoom_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function SelectToZoom_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return SelectToZoom_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectToZoom_arrayLikeToArray(o,minLen)}(arr,i)||function SelectToZoom_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SelectToZoom_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectToZoom_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function SelectToZoom_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SelectToZoom(props){var keepRatio=props.keepRatio,interactionProps=SelectToZoom_objectWithoutProperties(props,SelectToZoom_excluded),dataToWorld=(0,AxisSystemProvider.e)().dataToWorld,moveCameraTo=(0,interactions_hooks._b)(),_useThree=(0,react_three_fiber_esm.Ky)((function(state){return state.size})),width=_useThree.width,height=_useThree.height,camera=(0,react_three_fiber_esm.Ky)((function(state){return state.camera})),_useCameraState=(0,hooks.Jk)(utils.Sg,[]),xVisibleDomain=_useCameraState.xVisibleDomain,yVisibleDomain=_useCameraState.yVisibleDomain,dataRatio=Math.abs((xVisibleDomain[1]-xVisibleDomain[0])/(yVisibleDomain[1]-yVisibleDomain[0]));return(0,jsx_runtime.jsx)(SelectionTool.Z,Object.assign({onSelectionEnd:function onSelectionEnd(selection){var dataStartPoint=selection.startPoint,dataEndPoint=selection.endPoint,_map2=SelectToZoom_slicedToArray((keepRatio?(0,interactions_utils.Nm)(dataStartPoint,dataEndPoint,dataRatio):[dataStartPoint,dataEndPoint]).map(dataToWorld),2),startPoint=_map2[0],endPoint=_map2[1];if(startPoint.x!==endPoint.x||startPoint.y!==endPoint.y){var zoomRect=(0,interactions_utils.rq)(startPoint,endPoint),zoomRectCenter=zoomRect.center;camera.scale.set(zoomRect.width/width,zoomRect.height/height,1),camera.updateMatrixWorld(),moveCameraTo(zoomRectCenter.x,zoomRectCenter.y)}},id:"SelectToZoom"},interactionProps,{children:function children(_ref){var startPoint=_ref.startPoint,endPoint=_ref.endPoint;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SelectionRect.Z,{startPoint:startPoint,endPoint:endPoint,fill:"white",stroke:"black",fillOpacity:keepRatio?0:.25,strokeDasharray:keepRatio?"4":void 0}),keepRatio&&(0,jsx_runtime.jsx)(interactions_RatioSelectionRect,{startPoint:startPoint,endPoint:endPoint,ratio:dataRatio,fillOpacity:.25,fill:"white",stroke:"black"})]})}}))}SelectToZoom.displayName="SelectToZoom";var interactions_SelectToZoom=SelectToZoom;try{SelectToZoom.displayName="SelectToZoom",SelectToZoom.__docgenInfo={description:"",displayName:"SelectToZoom",props:{keepRatio:{defaultValue:null,description:"",name:"keepRatio",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"ModifierKey | ModifierKey[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/SelectToZoom.tsx#SelectToZoom"]={docgenInfo:SelectToZoom.__docgenInfo,name:"SelectToZoom",path:"../../packages/lib/src/interactions/SelectToZoom.tsx#SelectToZoom"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/SelectionRect.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js");var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_apkfqzawxbvyaakrxvzzbm6zli/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),_vis_hooks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/lib/src/vis/hooks.ts"),_vis_shared_Overlay__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/lib/src/vis/shared/Overlay.tsx"),_vis_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/lib/src/vis/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["startPoint","endPoint","fill","fillOpacity"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SelectionRect(props){var startPoint=props.startPoint,endPoint=props.endPoint,_props$fill=props.fill,fill=void 0===_props$fill?"red":_props$fill,_props$fillOpacity=props.fillOpacity,fillOpacity=void 0===_props$fillOpacity?.5:_props$fillOpacity,restSvgProps=_objectWithoutProperties(props,_excluded),_useThree=(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.Ky)((function(state){return state.size})),width=_useThree.width,height=_useThree.height,htmlSelection=(0,_vis_hooks__WEBPACK_IMPORTED_MODULE_8__.Jk)((function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return{startPoint:_vis_utils__WEBPACK_IMPORTED_MODULE_9__.i2.apply(void 0,args.concat([startPoint])),endPoint:_vis_utils__WEBPACK_IMPORTED_MODULE_9__.i2.apply(void 0,args.concat([endPoint]))}}),[startPoint,endPoint]),_htmlSelection$startP=htmlSelection.startPoint,x1=_htmlSelection$startP.x,y1=_htmlSelection$startP.y,_htmlSelection$endPoi=htmlSelection.endPoint,x2=_htmlSelection$endPoi.x,y2=_htmlSelection$endPoi.y;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_vis_shared_Overlay__WEBPACK_IMPORTED_MODULE_10__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg",{width:width,height:height,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("rect",Object.assign({x:Math.min(x1,x2),y:Math.min(y1,y2),width:Math.abs(x2-x1),height:Math.abs(y2-y1),fill:fill,fillOpacity:fillOpacity},restSvgProps))})})}SelectionRect.displayName="SelectionRect",__webpack_exports__.Z=SelectionRect;try{SelectionRect.displayName="SelectionRect",SelectionRect.__docgenInfo={description:"",displayName:"SelectionRect",props:{startPoint:{defaultValue:null,description:"",name:"startPoint",required:!0,type:{name:"Vector2"}},endPoint:{defaultValue:null,description:"",name:"endPoint",required:!0,type:{name:"Vector2"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/SelectionRect.tsx#SelectionRect"]={docgenInfo:SelectionRect.__docgenInfo,name:"SelectionRect",path:"../../packages/lib/src/interactions/SelectionRect.tsx#SelectionRect"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/SelectionTool.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return SelectionTool}});__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.from.js");var _react_hookz_web__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useRafState/useRafState.js"),_react_hookz_web__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useKeyboardEvent/useKeyboardEvent.js"),_react_three_fiber__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_apkfqzawxbvyaakrxvzzbm6zli/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_vis_shared_AxisSystemProvider__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/lib/src/vis/shared/AxisSystemProvider.tsx"),_hooks__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),_models__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../packages/lib/src/interactions/models.ts"),_utils__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../packages/lib/src/interactions/utils.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectionTool(props){var children=props.children,onSelectionStart=props.onSelectionStart,onSelectionChange=props.onSelectionChange,onSelectionEnd=props.onSelectionEnd,_props$id=props.id,id=void 0===_props$id?"Selection":_props$id,modifierKey=props.modifierKey,disabled=props.disabled,camera=(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_11__.Ky)((function(state){return state.camera})),_useAxisSystemContext=(0,_vis_shared_AxisSystemProvider__WEBPACK_IMPORTED_MODULE_12__.e)(),dataToWorld=_useAxisSystemContext.dataToWorld,worldToData=_useAxisSystemContext.worldToData,modifierKeys=(0,_utils__WEBPACK_IMPORTED_MODULE_13__.Et)(modifierKey),shouldInteract=(0,_hooks__WEBPACK_IMPORTED_MODULE_14__.X2)(id,{button:_models__WEBPACK_IMPORTED_MODULE_15__.t.Left,modifierKeys:modifierKeys,disabled:disabled}),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(),2),startPoint=_useState2[0],setStartPoint=_useState2[1],_useRafState2=_slicedToArray((0,_react_hookz_web__WEBPACK_IMPORTED_MODULE_16__.j)(void 0),2),endPoint=_useRafState2[0],setEndPoint=_useRafState2[1],isModifierKeyPressed=(0,_hooks__WEBPACK_IMPORTED_MODULE_14__.cP)(modifierKeys),onPointerDown=(0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((function(evt){var dataPt=evt.dataPt,sourceEvent=evt.sourceEvent;if(shouldInteract(sourceEvent)){var target=sourceEvent.target,pointerId=sourceEvent.pointerId;target.setPointerCapture(pointerId),setStartPoint(dataPt),onSelectionStart&&onSelectionStart()}}),[onSelectionStart,shouldInteract]),onPointerMove=(0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((function(evt){if(startPoint){var worldPt=evt.worldPt,sourceEvent=evt.sourceEvent,dataEndPoint=worldToData((0,_utils__WEBPACK_IMPORTED_MODULE_13__.tS)(worldPt,camera));setEndPoint(dataEndPoint);var worldEndPoint=dataToWorld(dataEndPoint),worldStartPoint=dataToWorld(startPoint);onSelectionChange&&shouldInteract(sourceEvent)&&onSelectionChange({startPoint:startPoint,endPoint:dataEndPoint,worldStartPoint:worldStartPoint,worldEndPoint:worldEndPoint})}}),[startPoint,worldToData,camera,setEndPoint,dataToWorld,onSelectionChange,shouldInteract]),onPointerUp=(0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((function(evt){if(startPoint){var sourceEvent=evt.sourceEvent,worldPt=evt.worldPt,target=sourceEvent.target,pointerId=sourceEvent.pointerId;if(target.releasePointerCapture(pointerId),setStartPoint(void 0),setEndPoint(void 0),onSelectionEnd&&shouldInteract(sourceEvent)){var dataEndPoint=worldToData((0,_utils__WEBPACK_IMPORTED_MODULE_13__.tS)(worldPt,camera)),_worldEndPoint=dataToWorld(dataEndPoint),_worldStartPoint=dataToWorld(startPoint);onSelectionEnd({startPoint:startPoint,endPoint:dataEndPoint,worldStartPoint:_worldStartPoint,worldEndPoint:_worldEndPoint})}}}),[startPoint,setEndPoint,onSelectionEnd,shouldInteract,worldToData,camera,dataToWorld]);if((0,_hooks__WEBPACK_IMPORTED_MODULE_14__.IZ)({onPointerDown:onPointerDown,onPointerMove:onPointerMove,onPointerUp:onPointerUp}),(0,_react_hookz_web__WEBPACK_IMPORTED_MODULE_17__.v)("Escape",(function(){setStartPoint(void 0),setEndPoint(void 0)}),[],{event:"keydown"}),!startPoint||!endPoint||!isModifierKeyPressed)return null;var worldEndPoint=dataToWorld(endPoint),worldStartPoint=dataToWorld(startPoint);return children({startPoint:startPoint,endPoint:endPoint,worldStartPoint:worldStartPoint,worldEndPoint:worldEndPoint})}try{SelectionTool.displayName="SelectionTool",SelectionTool.__docgenInfo={description:"",displayName:"SelectionTool",props:{onSelectionStart:{defaultValue:null,description:"",name:"onSelectionStart",required:!1,type:{name:"(() => void)"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!1,type:{name:"((points: Selection) => void)"}},onSelectionEnd:{defaultValue:null,description:"",name:"onSelectionEnd",required:!1,type:{name:"((points: Selection) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"ModifierKey | ModifierKey[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/SelectionTool.tsx#SelectionTool"]={docgenInfo:SelectionTool.__docgenInfo,name:"SelectionTool",path:"../../packages/lib/src/interactions/SelectionTool.tsx#SelectionTool"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/Zoom.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/src/interactions/utils.ts");function Zoom(props){var modifierKey=props.modifierKey,disabled=props.disabled,shouldInteract=(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.X2)("Zoom",{modifierKeys:(0,_utils__WEBPACK_IMPORTED_MODULE_1__.Et)(modifierKey),disabled:disabled,button:"Wheel"});return(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.IZ)({onWheel:(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.kf)((function isZoomAllowed(sourceEvent){var shouldZoom=shouldInteract(sourceEvent);return{x:shouldZoom,y:shouldZoom}}))}),null}__webpack_exports__.Z=Zoom;try{Zoom.displayName="Zoom",Zoom.__docgenInfo={description:"",displayName:"Zoom",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"ModifierKey | ModifierKey[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/Zoom.tsx#Zoom"]={docgenInfo:Zoom.__docgenInfo,name:"Zoom",path:"../../packages/lib/src/interactions/Zoom.tsx#Zoom"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/vis/shared/Overlay.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js");var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_apkfqzawxbvyaakrxvzzbm6zli/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),_Html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/vis/shared/Html.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function Overlay(props){var children=props.children,style=props.style,className=props.className,_useThree=(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Ky)((function(state){return state.size})),width=_useThree.width,height=_useThree.height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Html__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:className,style:Object.assign({position:"absolute",top:0,left:0,width:width,height:height,pointerEvents:"none"},style),children:children})})}Overlay.displayName="Overlay",__webpack_exports__.Z=Overlay;try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/vis/shared/Overlay.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"../../packages/lib/src/vis/shared/Overlay.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}}}]);