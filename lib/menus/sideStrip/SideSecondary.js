"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideSecondary = exports.SideSecondaryComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SideSecondaryComponent = function SideSecondaryComponent(_ref) {
  var classes = _ref.classes,
      show = _ref.show,
      menuParent = _ref.menuParent,
      menuList = _ref.menuList,
      onClose = _ref.onClose;
  return _react["default"].createElement(_core.Drawer, {
    classes: {
      paper: classes.menuSecond
    },
    variant: "persistent",
    open: show
  }, _react["default"].createElement(_core.Avatar, {
    className: classes.avatarMain
  }, _react["default"].createElement(menuParent.icon, null)), _react["default"].createElement("p", {
    className: classes.userLabel
  }, menuParent.label), _react["default"].createElement(_core.List, null, menuList.map(function (menuItem, index) {
    return _react["default"].createElement(_core.ListItem, {
      component: "a",
      onClick: function onClick() {
        return onClose();
      },
      href: menuItem.link,
      key: index,
      button: true
    }, _react["default"].createElement(_core.ListItemIcon, null, _react["default"].createElement(menuItem.icon, null)), _react["default"].createElement(_core.ListItemText, {
      inset: true,
      primary: menuItem.label
    }));
  })));
};

exports.SideSecondaryComponent = SideSecondaryComponent;
var SideSecondary = (0, _core.withStyles)(_style.styles, {
  withTheme: true
})(SideSecondaryComponent);
exports.SideSecondary = SideSecondary;