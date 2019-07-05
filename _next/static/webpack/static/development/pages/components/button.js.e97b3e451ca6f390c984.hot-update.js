webpackHotUpdate("static/development/pages/components/button.js",{

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonDanger.demo.tsx":
false,

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonLoading.demo.tsx":
/*!***********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonLoading.demo.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Button, HFlow } from '../../../../lib'\n\nfunction ButtonLoading() {\n  const handleClick = () => {\n    // Simulate a delayed function\n    return new Promise(resolve => {\n      setTimeout(() => resolve(), 2000)\n    })\n  }\n\n  return (\n    <HFlow alignItems='flex-end'>\n      <Button loading>Always loading</Button>\n      <Button onClick={handleClick} kind='primary'>\n        Click me\n      </Button>\n    </HFlow>\n  )\n}\n\nexport default ButtonLoading\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSizes.demo.tsx":
/*!*********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSizes.demo.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Button, HFlow, VFlow } from '../../../../lib'\n\nfunction ButtonSizes() {\n  return (\n    <VFlow>\n      <HFlow alignItems='flex-end'>\n        <Button kind='primary' size='large'>\n          Large\n        </Button>\n        <Button kind='primary' size='medium'>\n          Medium\n        </Button>\n        <Button kind='primary' size='small'>\n          Small\n        </Button>\n      </HFlow>\n      <Button kind='primary' block>\n        Block button\n      </Button>\n    </VFlow>\n  )\n}\n\nexport default ButtonSizes\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSkins.demo.tsx":
/*!*********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSkins.demo.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Button, HFlow, VFlow } from '../../../../lib'\n\nfunction ButtonSkins() {\n  return (\n    <VFlow>\n      <HFlow alignItems='flex-end'>\n        <Button kind='normal' skin='default'>\n          Normal / Default\n        </Button>\n        <Button kind='normal' skin='ghost'>\n          Normal / Ghost\n        </Button>\n      </HFlow>\n      <HFlow alignItems='flex-end'>\n        <Button kind='primary' skin='default'>\n          Primary / Default\n        </Button>\n        <Button kind='primary' skin='outline'>\n          Primary / Outline\n        </Button>\n        <Button kind='primary' skin='ghost'>\n          Primary / Ghost\n        </Button>\n      </HFlow>\n      <HFlow alignItems='flex-end'>\n        <Button kind='danger' skin='default'>\n          Danger / Default\n        </Button>\n        <Button kind='danger' skin='outline'>\n          Danger / Outline\n        </Button>\n        <Button kind='danger' skin='ghost'>\n          Danger / Ghost\n        </Button>\n      </HFlow>\n    </VFlow>\n  )\n}\n\nexport default ButtonSkins\n");

/***/ }),

/***/ "./ sync recursive ./!./!../node_modules/raw-loader/dist/cjs.js!./ \\.demo.tsx$":
/*!******************************************************************!*\
  !*** . sync !../node_modules/raw-loader/dist/cjs.js \.demo.tsx$ ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/components/alert/AlertDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/alert/AlertDefault.demo.tsx",
	"./pages/components/breadcrumb/breadcrumb.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/breadcrumb/breadcrumb.demo.tsx",
	"./pages/components/button/ButtonIcons.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonIcons.demo.tsx",
	"./pages/components/button/ButtonLoading.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonLoading.demo.tsx",
	"./pages/components/button/ButtonSizes.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSizes.demo.tsx",
	"./pages/components/button/ButtonSkins.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/button/ButtonSkins.demo.tsx",
	"./pages/components/checkbox/Checkbox.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/checkbox/Checkbox.demo.tsx",
	"./pages/components/content-switch/ContentSwitch.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/content-switch/ContentSwitch.demo.tsx",
	"./pages/components/date-picker/DatePickerExample.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/date-picker/DatePickerExample.demo.tsx",
	"./pages/components/dropdown/DropdownButton.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/dropdown/DropdownButton.demo.tsx",
	"./pages/components/dropdown/DropdownCustomAnchor.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/dropdown/DropdownCustomAnchor.demo.tsx",
	"./pages/components/file-uploader/FileUploader.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/file-uploader/FileUploader.demo.tsx",
	"./pages/components/form/Form.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/form/Form.demo.tsx",
	"./pages/components/link/Link.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/link/Link.demo.tsx",
	"./pages/components/modal/ConfirmationModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/ConfirmationModal.demo.tsx",
	"./pages/components/modal/DangerModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/DangerModal.demo.tsx",
	"./pages/components/modal/InformationModal.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/modal/InformationModal.demo.tsx",
	"./pages/components/multi-select/MultiSelect.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/multi-select/MultiSelect.demo.tsx",
	"./pages/components/paginator/Paginator.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/paginator/Paginator.demo.tsx",
	"./pages/components/radio-button/RadioExample.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/radio-button/RadioExample.demo.tsx",
	"./pages/components/search/Search.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/search/Search.demo.tsx",
	"./pages/components/select/Select.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/select/Select.demo.tsx",
	"./pages/components/switch/SwitchDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/switch/SwitchDefault.demo.tsx",
	"./pages/components/table/TableDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/table/TableDefault.demo.tsx",
	"./pages/components/tabs/Tab.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tabs/Tab.demo.tsx",
	"./pages/components/tag/TagDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagDefault.demo.tsx",
	"./pages/components/tag/TagIcon.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagIcon.demo.tsx",
	"./pages/components/tag/TagRemovable.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tag/TagRemovable.demo.tsx",
	"./pages/components/text-input/TextArea.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/text-input/TextArea.demo.tsx",
	"./pages/components/text-input/TextInput.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/text-input/TextInput.demo.tsx",
	"./pages/components/tooltip/TooltipDefault.demo.tsx": "../node_modules/raw-loader/dist/cjs.js!./pages/components/tooltip/TooltipDefault.demo.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive ./!./!../node_modules/raw-loader/dist/cjs.js!./ \\.demo.tsx$";

/***/ }),

/***/ "./ sync recursive \\.demo.tsx$":
/*!**************************!*\
  !*** . sync \.demo.tsx$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/components/alert/AlertDefault.demo.tsx": "./pages/components/alert/AlertDefault.demo.tsx",
	"./pages/components/breadcrumb/breadcrumb.demo.tsx": "./pages/components/breadcrumb/breadcrumb.demo.tsx",
	"./pages/components/button/ButtonIcons.demo.tsx": "./pages/components/button/ButtonIcons.demo.tsx",
	"./pages/components/button/ButtonLoading.demo.tsx": "./pages/components/button/ButtonLoading.demo.tsx",
	"./pages/components/button/ButtonSizes.demo.tsx": "./pages/components/button/ButtonSizes.demo.tsx",
	"./pages/components/button/ButtonSkins.demo.tsx": "./pages/components/button/ButtonSkins.demo.tsx",
	"./pages/components/checkbox/Checkbox.demo.tsx": "./pages/components/checkbox/Checkbox.demo.tsx",
	"./pages/components/content-switch/ContentSwitch.demo.tsx": "./pages/components/content-switch/ContentSwitch.demo.tsx",
	"./pages/components/date-picker/DatePickerExample.demo.tsx": "./pages/components/date-picker/DatePickerExample.demo.tsx",
	"./pages/components/dropdown/DropdownButton.demo.tsx": "./pages/components/dropdown/DropdownButton.demo.tsx",
	"./pages/components/dropdown/DropdownCustomAnchor.demo.tsx": "./pages/components/dropdown/DropdownCustomAnchor.demo.tsx",
	"./pages/components/file-uploader/FileUploader.demo.tsx": "./pages/components/file-uploader/FileUploader.demo.tsx",
	"./pages/components/form/Form.demo.tsx": "./pages/components/form/Form.demo.tsx",
	"./pages/components/link/Link.demo.tsx": "./pages/components/link/Link.demo.tsx",
	"./pages/components/modal/ConfirmationModal.demo.tsx": "./pages/components/modal/ConfirmationModal.demo.tsx",
	"./pages/components/modal/DangerModal.demo.tsx": "./pages/components/modal/DangerModal.demo.tsx",
	"./pages/components/modal/InformationModal.demo.tsx": "./pages/components/modal/InformationModal.demo.tsx",
	"./pages/components/multi-select/MultiSelect.demo.tsx": "./pages/components/multi-select/MultiSelect.demo.tsx",
	"./pages/components/paginator/Paginator.demo.tsx": "./pages/components/paginator/Paginator.demo.tsx",
	"./pages/components/radio-button/RadioExample.demo.tsx": "./pages/components/radio-button/RadioExample.demo.tsx",
	"./pages/components/search/Search.demo.tsx": "./pages/components/search/Search.demo.tsx",
	"./pages/components/select/Select.demo.tsx": "./pages/components/select/Select.demo.tsx",
	"./pages/components/switch/SwitchDefault.demo.tsx": "./pages/components/switch/SwitchDefault.demo.tsx",
	"./pages/components/table/TableDefault.demo.tsx": "./pages/components/table/TableDefault.demo.tsx",
	"./pages/components/tabs/Tab.demo.tsx": "./pages/components/tabs/Tab.demo.tsx",
	"./pages/components/tag/TagDefault.demo.tsx": "./pages/components/tag/TagDefault.demo.tsx",
	"./pages/components/tag/TagIcon.demo.tsx": "./pages/components/tag/TagIcon.demo.tsx",
	"./pages/components/tag/TagRemovable.demo.tsx": "./pages/components/tag/TagRemovable.demo.tsx",
	"./pages/components/text-input/TextArea.demo.tsx": "./pages/components/text-input/TextArea.demo.tsx",
	"./pages/components/text-input/TextInput.demo.tsx": "./pages/components/text-input/TextInput.demo.tsx",
	"./pages/components/tooltip/TooltipDefault.demo.tsx": "./pages/components/tooltip/TooltipDefault.demo.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive \\.demo.tsx$";

/***/ }),

/***/ "./pages/components/button/ButtonDanger.demo.tsx":
false,

/***/ "./pages/components/button/ButtonLoading.demo.tsx":
/*!********************************************************!*\
  !*** ./pages/components/button/ButtonLoading.demo.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");

var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/button/ButtonLoading.demo.tsx";



function ButtonLoading() {
  var handleClick = function handleClick() {
    // Simulate a delayed function
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
      setTimeout(function () {
        return resolve();
      }, 2000);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["HFlow"], {
    alignItems: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Always loading"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleClick,
    kind: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Click me"));
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonLoading);

/***/ }),

/***/ "./pages/components/button/ButtonSizes.demo.tsx":
/*!******************************************************!*\
  !*** ./pages/components/button/ButtonSizes.demo.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/button/ButtonSizes.demo.tsx";



function ButtonSizes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
    alignItems: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "primary",
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Large"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "primary",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Medium"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "primary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Small")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "primary",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Block button"));
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonSizes);

/***/ }),

/***/ "./pages/components/button/ButtonSkins.demo.tsx":
/*!******************************************************!*\
  !*** ./pages/components/button/ButtonSkins.demo.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../lib/index.js");
var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/button/ButtonSkins.demo.tsx";



function ButtonSkins() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VFlow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
    alignItems: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "normal",
    skin: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Normal / Default"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "normal",
    skin: "ghost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Normal / Ghost")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
    alignItems: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "primary",
    skin: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Primary / Default"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "primary",
    skin: "outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Primary / Outline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "primary",
    skin: "ghost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Primary / Ghost")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["HFlow"], {
    alignItems: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "danger",
    skin: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Danger / Default"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "danger",
    skin: "outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Danger / Outline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    kind: "danger",
    skin: "ghost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Danger / Ghost")));
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonSkins);

/***/ }),

/***/ "./pages/components/button/index.mdx":
/*!*******************************************!*\
  !*** ./pages/components/button/index.mdx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "../node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _components_Demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Demo */ "./components/Demo.tsx");


var _jsxFileName = "/home/bonetti/workspace/bold/site/pages/components/button/index.mdx";

/* @jsx mdx */


/* @jsx mdx */



var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "button"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "Button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Buttons express what action will occur when the user clicks it. Buttons are used to initialize an action, and some examples include actions like Add, Save, and Delete."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "best-practices"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "Best practices"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Do not use Buttons as navigational elements. Instead, use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Links"), " because it takes the user to a new page and is not associated with an action."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Button labels tell users what will happen when they click the button. Use verbs that describe the action, such as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Add"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Delete"), ". Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) and no more than three words for button labels."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "For Sets of Buttons, use specific labels, such as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Save"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Discard"), ", instead of using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "OK"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Cancel"), ". This is particularly helpful when the user is confirming an action.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "button-types"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), "Button types"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    width: 190,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Default"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "When an action requires primary dominance on the page.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Ghost button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "When an action does not require primary dominance on the page.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Button with icon"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Icon button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Usually used associated with a dropdown menu, settings panel.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Disabled button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Use when the user cannot proceed until an input is collected.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Danger button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "When an action has potentially destructive effects on the user's data (delete, remove, etc).")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Set of buttons"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "When an action required by the user has more than one option, always use a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right.")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "button-sizes"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), "Button sizes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Demo__WEBPACK_IMPORTED_MODULE_4__["Demo"], {
    src: "pages/components/button/ButtonSizes",
    mdxType: "Demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "button-kinds--skins"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), "Button Kinds / Skins"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Demo__WEBPACK_IMPORTED_MODULE_4__["Demo"], {
    src: "pages/components/button/ButtonSkins",
    mdxType: "Demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "button-with-icons"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), "Button with icons"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Demo__WEBPACK_IMPORTED_MODULE_4__["Demo"], {
    src: "pages/components/button/ButtonIcons",
    mdxType: "Demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "loading-indicator"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), "Loading indicator"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "The loading indicator can be manually toggled on/off with the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "loading"), " prop or automatically by returning a promise to the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "onClick"), " prop."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Demo__WEBPACK_IMPORTED_MODULE_4__["Demo"], {
    src: "pages/components/button/ButtonLoading",
    mdxType: "Demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }));
}
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=button.js.e97b3e451ca6f390c984.hot-update.js.map