"use strict";

require("./index.css");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _SideStrip = require("./menus/sideStrip/SideStrip");

var _icons = require("@material-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mainLinks = [{
  label: "Home",
  icon: _icons.Home,
  selected: true,
  link: "#home"
}, {
  label: "Report",
  icon: _icons.Wallpaper,
  link: "#report"
}, {
  label: "Admin",
  icon: _icons.PieChart,
  subMenu: [{
    label: "My Dashboard",
    icon: _icons.Dashboard,
    link: "#mydashboard"
  }, {
    label: "Data Discovery",
    icon: _icons.DataUsage,
    link: "#datausage"
  }]
}];
var bottomLinks = [{
  label: "Messages",
  icon: _icons.Warning
}, {
  label: "Settings",
  icon: _icons.Settings
}, {
  label: "Logout",
  icon: _icons.Input,
  link: "#logout"
}];
(0, _reactDom.render)(_react["default"].createElement(_SideStrip.SideStrip, {
  mainLinks: mainLinks,
  bottomLinks: bottomLinks,
  expandMenu: false,
  userLabel: "Jane Smith",
  imageUrl: "https://material-ui.com/static/images/avatar/7.jpg"
}), document.querySelector('#app'));