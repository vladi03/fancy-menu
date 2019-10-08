"use strict";

require("./index.css");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _menus = require("./menus");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _reactDom.render)(_react["default"].createElement(_menus.DemoMenu, null), document.querySelector('#app'));