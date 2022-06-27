"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3724],{"../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useMap/useMap.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:function(){return useMap}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useRerender/useRerender.js"),proto=Map.prototype;function useMap(entries){var mapRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),rerender=(0,___WEBPACK_IMPORTED_MODULE_1__.S)();if(!mapRef.current){var map_1=new Map(entries);mapRef.current=map_1,map_1.set=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return proto.set.apply(map_1,args),rerender(),map_1},map_1.clear=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];proto.clear.apply(map_1,args),rerender()},map_1.delete=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var res=proto.delete.apply(map_1,args);return rerender(),res}}return mapRef.current}},"../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/grids/GridColumns.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return GridColumns}});var prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_visx_shape_lib_shapes_Line__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@visx+shape@2.10.0_react@17.0.2/node_modules/@visx/shape/lib/shapes/Line.js"),_visx_group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@visx+group@2.10.0_react@17.0.2/node_modules/@visx/group/esm/Group.js"),_visx_point__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@visx+point@2.6.0/node_modules/@visx/point/esm/Point.js"),_visx_scale__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@visx+scale@2.2.2/node_modules/@visx/scale/esm/utils/getTicks.js"),_visx_scale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@visx+scale@2.2.2/node_modules/@visx/scale/esm/utils/coerceNumber.js"),_utils_getScaleBandwidth__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js"),_excluded=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function GridColumns(_ref){var _ref$top=_ref.top,top=void 0===_ref$top?0:_ref$top,_ref$left=_ref.left,left=void 0===_ref$left?0:_ref$left,scale=_ref.scale,height=_ref.height,_ref$stroke=_ref.stroke,stroke=void 0===_ref$stroke?"#eaf0f6":_ref$stroke,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=void 0===_ref$strokeWidth?1:_ref$strokeWidth,strokeDasharray=_ref.strokeDasharray,className=_ref.className,_ref$numTicks=_ref.numTicks,numTicks=void 0===_ref$numTicks?10:_ref$numTicks,lineStyle=_ref.lineStyle,offset=_ref.offset,tickValues=_ref.tickValues,children=_ref.children,restProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),ticks=null!=tickValues?tickValues:(0,_visx_scale__WEBPACK_IMPORTED_MODULE_2__.Z)(scale,numTicks),scaleOffset=(null!=offset?offset:0)+(0,_utils_getScaleBandwidth__WEBPACK_IMPORTED_MODULE_3__.Z)(scale)/2,tickLines=ticks.map((function(d,index){var _coerceNumber,x=(null!=(_coerceNumber=(0,_visx_scale__WEBPACK_IMPORTED_MODULE_4__.Z)(scale(d)))?_coerceNumber:0)+scaleOffset;return{index:index,from:new _visx_point__WEBPACK_IMPORTED_MODULE_5__.Z({x:x,y:0}),to:new _visx_point__WEBPACK_IMPORTED_MODULE_5__.Z({x:x,y:height})}}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_visx_group__WEBPACK_IMPORTED_MODULE_6__.Z,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("visx-columns",className),top:top,left:left},children?children({lines:tickLines}):tickLines.map((function(_ref2){var from=_ref2.from,to=_ref2.to,index=_ref2.index;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_visx_shape_lib_shapes_Line__WEBPACK_IMPORTED_MODULE_7__.Z,_extends({key:"column-line-"+index,from:from,to:to,stroke:stroke,strokeWidth:strokeWidth,strokeDasharray:strokeDasharray,style:lineStyle},restProps))})))}GridColumns.propTypes={tickValues:prop_types__WEBPACK_IMPORTED_MODULE_8___default().array,height:prop_types__WEBPACK_IMPORTED_MODULE_8___default().number.isRequired}},"../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/grids/GridRows.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return GridRows}});var prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_visx_shape_lib_shapes_Line__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@visx+shape@2.10.0_react@17.0.2/node_modules/@visx/shape/lib/shapes/Line.js"),_visx_group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@visx+group@2.10.0_react@17.0.2/node_modules/@visx/group/esm/Group.js"),_visx_point__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@visx+point@2.6.0/node_modules/@visx/point/esm/Point.js"),_visx_scale__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@visx+scale@2.2.2/node_modules/@visx/scale/esm/utils/getTicks.js"),_visx_scale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@visx+scale@2.2.2/node_modules/@visx/scale/esm/utils/coerceNumber.js"),_utils_getScaleBandwidth__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js"),_excluded=["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function GridRows(_ref){var _ref$top=_ref.top,top=void 0===_ref$top?0:_ref$top,_ref$left=_ref.left,left=void 0===_ref$left?0:_ref$left,scale=_ref.scale,width=_ref.width,_ref$stroke=_ref.stroke,stroke=void 0===_ref$stroke?"#eaf0f6":_ref$stroke,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=void 0===_ref$strokeWidth?1:_ref$strokeWidth,strokeDasharray=_ref.strokeDasharray,className=_ref.className,children=_ref.children,_ref$numTicks=_ref.numTicks,numTicks=void 0===_ref$numTicks?10:_ref$numTicks,lineStyle=_ref.lineStyle,offset=_ref.offset,tickValues=_ref.tickValues,restProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),ticks=null!=tickValues?tickValues:(0,_visx_scale__WEBPACK_IMPORTED_MODULE_2__.Z)(scale,numTicks),scaleOffset=(null!=offset?offset:0)+(0,_utils_getScaleBandwidth__WEBPACK_IMPORTED_MODULE_3__.Z)(scale)/2,tickLines=ticks.map((function(d,index){var _coerceNumber,y=(null!=(_coerceNumber=(0,_visx_scale__WEBPACK_IMPORTED_MODULE_4__.Z)(scale(d)))?_coerceNumber:0)+scaleOffset;return{index:index,from:new _visx_point__WEBPACK_IMPORTED_MODULE_5__.Z({x:0,y:y}),to:new _visx_point__WEBPACK_IMPORTED_MODULE_5__.Z({x:width,y:y})}}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_visx_group__WEBPACK_IMPORTED_MODULE_6__.Z,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("visx-rows",className),top:top,left:left},children?children({lines:tickLines}):tickLines.map((function(_ref2){var from=_ref2.from,to=_ref2.to,index=_ref2.index;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_visx_shape_lib_shapes_Line__WEBPACK_IMPORTED_MODULE_7__.Z,_extends({key:"row-line-"+index,from:from,to:to,stroke:stroke,strokeWidth:strokeWidth,strokeDasharray:strokeDasharray,style:lineStyle},restProps))})))}GridRows.propTypes={tickValues:prop_types__WEBPACK_IMPORTED_MODULE_8___default().array,width:prop_types__WEBPACK_IMPORTED_MODULE_8___default().number.isRequired}},"../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function getScaleBandwidth(scale){return"bandwidth"in scale?scale.bandwidth():0}__webpack_require__.d(__webpack_exports__,{Z:function(){return getScaleBandwidth}})},"../../node_modules/.pnpm/@visx+shape@2.10.0_react@17.0.2/node_modules/@visx/shape/lib/shapes/Line.js":function(__unused_webpack_module,exports,__webpack_require__){exports.Z=function Line(_ref){var _ref$from=_ref.from,from=void 0===_ref$from?{x:0,y:0}:_ref$from,_ref$to=_ref.to,to=void 0===_ref$to?{x:1,y:1}:_ref$to,_ref$fill=_ref.fill,fill=void 0===_ref$fill?"transparent":_ref$fill,className=_ref.className,innerRef=_ref.innerRef,restProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),isRectilinear=from.x===to.x||from.y===to.y;return _react.default.createElement("line",_extends({ref:innerRef,className:(0,_classnames.default)("visx-line",className),x1:from.x,y1:from.y,x2:to.x,y2:to.y,fill:fill,shapeRendering:isRectilinear?"crispEdges":"auto"},restProps))};var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js")),_classnames=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js")),_excluded=["from","to","fill","className","innerRef"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}},"./src/Overlay.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js");var _h5web_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/vis/shared/VisCanvas.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/lib/src/interactions/Zoom.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/src/interactions/Pan.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/lib/src/vis/shared/Overlay.tsx"),_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/decorators/FillHeight.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.Z,{abscissaConfig:{visDomain:[0,3],showGrid:!0},ordinateConfig:{visDomain:[50,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_4__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_5__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_6__.Z,{style:{background:"linear-gradient(135deg, #444cf715 25%, transparent 25%) -20px 0/ 40px 40px, linear-gradient(225deg, #444cf715 25%, transparent 25%) -20px 0/ 40px 40px, linear-gradient(315deg, #444cf715 25%, transparent 25%) 0px 0/ 40px 40px, linear-gradient(45deg, #444cf715 25%, #e5e5f715 25%) 0px 0/ 40px 40px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{style:{position:"absolute",top:0,left:10},children:["This HTML overlay fills the canvas but lets pointer events through. It appears above the axis system's grid and is not affected by panning/zooming (unlike ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"Annotation"}),")."]})})]})};Default.displayName="Default",__webpack_exports__.default={title:"Building Blocks/Overlay",component:Default,parameters:{layout:"fullscreen"},decorators:[_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_1__.Z]},Default.parameters=Object.assign({storySource:{source:"() => {\n  return (\n    <VisCanvas\n      abscissaConfig={{ visDomain: [0, 3], showGrid: true }}\n      ordinateConfig={{ visDomain: [50, 100] }}\n    >\n      <Zoom />\n      <Pan />\n      <Overlay\n        style={{\n          background:\n            'linear-gradient(135deg, #444cf715 25%, transparent 25%) -20px 0/ 40px 40px, linear-gradient(225deg, #444cf715 25%, transparent 25%) -20px 0/ 40px 40px, linear-gradient(315deg, #444cf715 25%, transparent 25%) 0px 0/ 40px 40px, linear-gradient(45deg, #444cf715 25%, #e5e5f715 25%) 0px 0/ 40px 40px',\n        }}\n      >\n        <p style={{ position: 'absolute', top: 0, left: 10 }}>\n          This HTML overlay fills the canvas but lets pointer events through. It\n          appears above the axis system's grid and is not affected by\n          panning/zooming (unlike <code>Annotation</code>).\n        </p>\n      </Overlay>\n    </VisCanvas>\n  );\n}"}},Default.parameters);var __namedExportsOrder=["Default"]},"../../packages/lib/src/interactions/Pan.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.string.sub.js");var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_apkfqzawxbvyaakrxvzzbm6zli/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),_models__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/lib/src/interactions/models.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/interactions/utils.ts");function Pan(props){var _props$button=props.button,button=void 0===_props$button?_models__WEBPACK_IMPORTED_MODULE_2__.t.Left:_props$button,modifierKey=props.modifierKey,disabled=props.disabled,modifierKeys=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Et)(modifierKey),camera=(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Ky)((function(state){return state.camera})),shouldInteract=(0,_hooks__WEBPACK_IMPORTED_MODULE_5__.X2)("Pan",{button:button,modifierKeys:modifierKeys,disabled:disabled}),moveCameraTo=(0,_hooks__WEBPACK_IMPORTED_MODULE_5__._b)(),startOffsetPosition=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),isModifierKeyPressed=(0,_hooks__WEBPACK_IMPORTED_MODULE_5__.cP)(modifierKeys),onPointerDown=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(evt){var worldPt=evt.worldPt,sourceEvent=evt.sourceEvent,target=sourceEvent.target,pointerId=sourceEvent.pointerId;shouldInteract(sourceEvent)&&(target.setPointerCapture(pointerId),startOffsetPosition.current=worldPt.clone())}),[shouldInteract]),onPointerUp=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(evt){var sourceEvent=evt.sourceEvent,target=sourceEvent.target,pointerId=sourceEvent.pointerId;target.releasePointerCapture(pointerId),startOffsetPosition.current=void 0}),[]),onPointerMove=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(evt){if(startOffsetPosition.current&&isModifierKeyPressed){var worldPt=evt.worldPt,delta=startOffsetPosition.current.clone().sub(worldPt),target=camera.position.clone().add(delta);moveCameraTo(target.x,target.y)}}),[camera,isModifierKeyPressed,moveCameraTo]);return(0,_hooks__WEBPACK_IMPORTED_MODULE_5__.IZ)({onPointerDown:onPointerDown,onPointerMove:onPointerMove,onPointerUp:onPointerUp}),null}__webpack_exports__.Z=Pan;try{Pan.displayName="Pan",Pan.__docgenInfo={description:"",displayName:"Pan",props:{button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"ModifierKey | ModifierKey[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/Pan.tsx#Pan"]={docgenInfo:Pan.__docgenInfo,name:"Pan",path:"../../packages/lib/src/interactions/Pan.tsx#Pan"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/Zoom.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/src/interactions/utils.ts");function Zoom(props){var modifierKey=props.modifierKey,disabled=props.disabled,shouldInteract=(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.X2)("Zoom",{modifierKeys:(0,_utils__WEBPACK_IMPORTED_MODULE_1__.Et)(modifierKey),disabled:disabled,button:"Wheel"});return(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.IZ)({onWheel:(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.kf)((function isZoomAllowed(sourceEvent){var shouldZoom=shouldInteract(sourceEvent);return{x:shouldZoom,y:shouldZoom}}))}),null}__webpack_exports__.Z=Zoom;try{Zoom.displayName="Zoom",Zoom.__docgenInfo={description:"",displayName:"Zoom",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"ModifierKey | ModifierKey[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/Zoom.tsx#Zoom"]={docgenInfo:Zoom.__docgenInfo,name:"Zoom",path:"../../packages/lib/src/interactions/Zoom.tsx#Zoom"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/models.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var MouseButton;__webpack_require__.d(__webpack_exports__,{t:function(){return MouseButton}}),function(MouseButton){MouseButton[MouseButton.Left=0]="Left",MouseButton[MouseButton.Middle=1]="Middle"}(MouseButton||(MouseButton={}))},"../../packages/lib/src/vis/shared/Overlay.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js");var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_apkfqzawxbvyaakrxvzzbm6zli/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),_Html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/vis/shared/Html.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function Overlay(props){var children=props.children,style=props.style,className=props.className,_useThree=(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Ky)((function(state){return state.size})),width=_useThree.width,height=_useThree.height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Html__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:className,style:Object.assign({position:"absolute",top:0,left:0,width:width,height:height,pointerEvents:"none"},style),children:children})})}Overlay.displayName="Overlay",__webpack_exports__.Z=Overlay;try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/vis/shared/Overlay.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"../../packages/lib/src/vis/shared/Overlay.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.string.sub.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){var $=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/string-html-forced.js")("sub")},{sub:function sub(){return createHTML(this,"sub","","")}})}}]);