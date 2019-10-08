"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DemoMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _SideStrip = require("./sideStrip/SideStrip");

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

var DemoMenu = function DemoMenu() {
  return _react["default"].createElement(_SideStrip.SideStrip, {
    mainLinks: mainLinks,
    bottomLinks: bottomLinks,
    expandMenu: false,
    userLabel: "Jane Smith",
    imageUrl: "https://material-ui.com/static/images/avatar/7.jpg"
  });
};

exports.DemoMenu = DemoMenu;