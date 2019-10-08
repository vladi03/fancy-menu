"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuButton = exports.MenuButtonComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _style = require("./style");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuButtonComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuButtonComponent, _React$Component);

  function MenuButtonComponent() {
    _classCallCheck(this, MenuButtonComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuButtonComponent).apply(this, arguments));
  }

  _createClass(MenuButtonComponent, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          classes = _this$props.classes,
          config = _this$props.config,
          showLabel = _this$props.showLabel,
          onClick = _this$props.onClick,
          selected = _this$props.selected,
          _onMouseOver = _this$props.onMouseOver;
      return _react["default"].createElement(_core.Button, {
        onClick: selected ? null : function () {
          return onClick();
        },
        onMouseOver: function onMouseOver() {
          return _onMouseOver();
        },
        style: {
          paddingLeft: showLabel ? 20 : 0
        },
        href: config.link,
        className: (0, _classnames["default"])(classes.menuButtonShape, (_classNames = {}, _defineProperty(_classNames, classes.menuButton, !selected), _defineProperty(_classNames, classes.menuButtonActive, selected), _classNames))
      }, _react["default"].createElement(config.icon, null), " ", showLabel && _react["default"].createElement("span", {
        className: classes.menuButtonLabel
      }, config.label));
    }
  }]);

  return MenuButtonComponent;
}(_react["default"].Component);

exports.MenuButtonComponent = MenuButtonComponent;
var MenuButton = (0, _core.withStyles)(_style.styles, {
  withTheme: true
})(MenuButtonComponent);
exports.MenuButton = MenuButton;