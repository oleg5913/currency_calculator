(this.webpackJsonpcurrency_calculator=this.webpackJsonpcurrency_calculator||[]).push([[0],{167:function(e,_,r){"use strict";r.r(_);var t=r(1),c=r(21),n=r.n(c),a=(r(65),r(66),r(2)),s=r(10),o=r(24),u=r(8),l=(r(91),r(0)),i=Object(o.b)((function(e){return{inputString:e.calculator.inputString,newValues:e.calculator.newValues,result:e.calculator.result}}),{insertValueActionCreator:u.e,cleanStringActionCreator:u.d,backActionCreator:u.b,calculationThunkCreator:u.c})((function(e){var _=Object(t.useState)(""),r=Object(s.a)(_,2),c=r[0],n=r[1],o=Object(t.useState)(!0),u=Object(s.a)(o,2),i=u[0],b=u[1],p=Object(t.useState)(""),d=Object(s.a)(p,2),m=d[0],j=d[1],O=Object(t.useState)(!1),C=Object(s.a)(O,2),E=C[0],U=C[1],h=Object(t.useState)(!1),D=Object(s.a)(h,2),M=D[0],P=D[1],f=function(_){var r={type:"",value:null};_>=0|"."===_&&(n(c+_),b(!1)),"+"===_|"-"===_|"("===_|")"===_&&(i||(b(!0),r=Object(a.a)(Object(a.a)({},r),{},{type:E?"multiplier":"number",value:c}),e.insertValueActionCreator(r),n(""),r=Object(a.a)(Object(a.a)({},r),{},{type:"symbol",value:_}),e.insertValueActionCreator(r),U(!1))),"*"===_|"/"===_&&(U(!0),i||(b(!0),r=Object(a.a)(Object(a.a)({},r),{},{type:E?"multiplier":"number",value:c}),e.insertValueActionCreator(r),n(_),r=Object(a.a)(Object(a.a)({},r),{},{type:"multiplier",value:_}),e.insertValueActionCreator(r),n(""))),"clear"===_&&(U(!1),n(""),b(!0),e.cleanStringActionCreator(),P(!1)),"back"===_&&(c?n(""):e.backActionCreator()),"equal"===_&&(""!==m&&"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"!==m?i||(b(!0),r=Object(a.a)(Object(a.a)({},r),{},{type:E?"multiplier":"number",value:c}),e.insertValueActionCreator(r),n(""),b(!0),e.calculationThunkCreator(m),P(!0)):alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"selectWrap",children:Object(l.jsxs)("select",{name:"currencySelect",onChange:function(e){var _=e.target.value;j(_)},children:[Object(l.jsx)("option",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430"}),Object(l.jsx)("option",{children:"USD"}),Object(l.jsx)("option",{children:"EUR"}),Object(l.jsx)("option",{children:"BYN"}),Object(l.jsx)("option",{children:"UAH"}),Object(l.jsx)("option",{children:"AMD"}),Object(l.jsx)("option",{children:"MDL"}),Object(l.jsx)("option",{children:"AZN"}),Object(l.jsx)("option",{children:"TJS"}),Object(l.jsx)("option",{children:"UZS"}),Object(l.jsx)("option",{children:"KZT"}),Object(l.jsx)("option",{children:"TRY"}),Object(l.jsx)("option",{children:"SEK"}),Object(l.jsx)("option",{children:"CZK"})]})}),Object(l.jsxs)("div",{className:"calculatorWrap",children:[Object(l.jsxs)("div",{class:"calculator",children:[Object(l.jsx)("div",{className:"item form",children:Object(l.jsxs)("p",{children:[e.inputString.map((function(e){return e.value})),c]})}),Object(l.jsx)("div",{className:"item clean symbol",onClick:function(){return f("clear")},children:"C"}),Object(l.jsx)("div",{className:"item back symbol",onClick:function(){return f("back")},children:"\u2190"}),Object(l.jsx)("div",{className:"item symbol",onClick:function(){return f("+")},children:"+"}),Object(l.jsx)("div",{className:"item symbol",onClick:function(){return f("-")},children:"-"}),Object(l.jsx)("div",{className:"item symbol",onClick:function(){return f("*")},children:"\xd7"}),Object(l.jsx)("div",{className:"item symbol",onClick:function(){return f("/")},children:"\xf7"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("7")},children:"7"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("8")},children:"8"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("9")},children:"9"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("(")},children:"("}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("4")},children:"4"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("5")},children:"5"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("6")},children:"6"}),Object(l.jsx)("div",{className:"item",onClick:function(){return f(")")},children:")"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("1")},children:"1"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("2")},children:"2"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f("3")},children:"3"}),Object(l.jsx)("div",{className:"item equal",onClick:function(){return f("equal")},children:"="}),Object(l.jsx)("div",{className:"item number zero",onClick:function(){return f("0")},children:"0"}),Object(l.jsx)("div",{className:"item number",onClick:function(){return f(".")},children:"."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"result",children:Object(l.jsxs)("p",{children:[e.newValues," ",M?" = ":null," ",e.result]})}),Object(l.jsxs)("div",{className:"instruction",children:[Object(l.jsx)("h2",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"}),Object(l.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u0430\u043b\u044e\u0442\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0445\u043e\u0447\u0435\u0448\u044c \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438 \u0440\u0430\u0441\u0447\u0435\u0442 \u0432 \u0440\u0443\u0431\u043b\u044f\u0445 \u0432 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440. \u041f\u0440\u0438 \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0438 \u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0432\u0432\u043e\u0434\u0438 \u0447\u0438\u0441\u043b\u0430 \u0432 \u0442\u0430\u043a\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435: \u0426\u0415\u041d\u0410 \u0417\u0410 \u0422\u041e\u0412\u0410\u0420 * \u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u041e \u0422\u041e\u0412\u0410\u0420\u0410"})]})]})]})]})})),b=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(i,{})})},p=r(7),d=r(58),m=r(169),j=Object(p.c)({calculator:u.a,form:m.a}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,C=Object(p.e)(j,O(Object(p.a)(d.a)));n.a.render(Object(l.jsx)(o.a,{store:C,children:Object(l.jsx)(b,{})}),document.getElementById("root"))},4:function(e,_,r){"use strict";r.d(_,"d",(function(){return t})),r.d(_,"b",(function(){return c})),r.d(_,"a",(function(){return n})),r.d(_,"e",(function(){return a})),r.d(_,"c",(function(){return s}));var t="INSERT-VALUE",c="CLEAN-STRING",n="BACK",a="SET-CURRENCIES",s="CONVERSION"},56:function(e,_,r){"use strict";r.d(_,"a",(function(){return n}));var t=r(57),c=r.n(t).a.create({baseURL:"https://www.cbr-xml-daily.ru/latest.js"}),n={getCurrencies:function(){return c.get().then((function(e){return e.data.rates}))}}},65:function(e,_,r){},66:function(e,_,r){},8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CalculatorReducer})),__webpack_require__.d(__webpack_exports__,"e",(function(){return insertValueActionCreator})),__webpack_require__.d(__webpack_exports__,"d",(function(){return cleanStringActionCreator})),__webpack_require__.d(__webpack_exports__,"b",(function(){return backActionCreator})),__webpack_require__.d(__webpack_exports__,"c",(function(){return calculationThunkCreator}));var C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32),C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(55),C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_api_api__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(56),_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),initialState={currencies:{},inputString:[],newValues:[],result:""},CalculatorReducer=function CalculatorReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_5__.e:return Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)(Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)({},state),{},{currencies:action.currencies});case _types__WEBPACK_IMPORTED_MODULE_5__.d:return Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)(Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)({},state),{},{inputString:[].concat(Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.a)(state.inputString),[action.number])});case _types__WEBPACK_IMPORTED_MODULE_5__.b:return Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)(Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)({},state),{},{inputString:[],newValues:[],result:[]});case _types__WEBPACK_IMPORTED_MODULE_5__.c:var newVal=state.inputString.map((function(e){return"number"===e.type?(e.value*state.currencies[action.pair]).toFixed(2):e.value})).join(" "),res=eval(newVal).toFixed(2);return Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)(Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)({},state),{},{newValues:newVal,result:res});case _types__WEBPACK_IMPORTED_MODULE_5__.a:return Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)(Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.a)({},state),{},{inputString:Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.a)(state.inputString.slice(0,state.inputString.length-1))});default:return state}},insertValueActionCreator=function(e){return{type:_types__WEBPACK_IMPORTED_MODULE_5__.d,number:e}},cleanStringActionCreator=function(){return{type:_types__WEBPACK_IMPORTED_MODULE_5__.b}},conversionActionCreator=function(e){return{type:_types__WEBPACK_IMPORTED_MODULE_5__.c,pair:e}},setCurrenciesActionCreator=function(e){return{type:_types__WEBPACK_IMPORTED_MODULE_5__.e,currencies:e}},backActionCreator=function(){return{type:_types__WEBPACK_IMPORTED_MODULE_5__.a}},calculationThunkCreator=function(e){return function(){var _=Object(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _(r){var t;return C_Users_User_projects_currency_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,_api_api__WEBPACK_IMPORTED_MODULE_4__.a.getCurrencies();case 2:t=_.sent,r(setCurrenciesActionCreator(t)),r(conversionActionCreator(e));case 5:case"end":return _.stop()}}),_)})));return function(e){return _.apply(this,arguments)}}()}},91:function(e,_,r){}},[[167,1,2]]]);
//# sourceMappingURL=main.401cd6d6.chunk.js.map