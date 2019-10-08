"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideStrip = exports.SideStripComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

var _style = require("./style");

var _icons = require("@material-ui/icons");

var _MenuButton = require("./MenuButton");

var _SideSecondary = require("./SideSecondary");

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

var SideStripComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideStripComponent, _React$Component);

  function SideStripComponent() {
    var _this;

    _classCallCheck(this, SideStripComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideStripComponent).call(this));
    _this.state = {
      selectedInternal: {
        area: "byConfig",
        index: -1
      },
      expandMenuInternal: false,
      secondaryMenuOptions: [],
      secondaryMenuParent: null
    };
    return _this;
  }

  _createClass(SideStripComponent, [{
    key: "onClickMenu",
    value: function onClickMenu(area, index, config) {
      var onClick = this.props.onClick; //test to see if the menu option from parent has a ocClick function

      if (config && config.onClick && typeof onClick === "function") {
        onClick(config);
      } else {
        var selectedInternal = {
          area: area,
          index: index
        }; // noinspection JSCheckFunctionSignatures

        this.setState({
          selectedInternal: selectedInternal
        });
      }
    }
  }, {
    key: "onCloseSecondaryMenu",
    value: function onCloseSecondaryMenu() {
      // noinspection JSCheckFunctionSignatures
      this.setState({
        secondaryMenuOptions: [],
        expandMenuInternal: false
      });
    }
  }, {
    key: "onMouseOverMenu",
    value: function onMouseOverMenu(config) {
      var secondaryMenuOptions = config && Array.isArray(config.subMenu) ? config.subMenu : []; // noinspection JSCheckFunctionSignatures

      this.setState({
        secondaryMenuOptions: secondaryMenuOptions,
        secondaryMenuParent: config
      });
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver() {
      // noinspection JSCheckFunctionSignatures
      this.setState({
        expandMenuInternal: true
      });
    }
  }, {
    key: "onCollapse",
    value: function onCollapse() {
      // noinspection JSCheckFunctionSignatures
      this.setState({
        expandMenuInternal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames;

      var _this$props = this.props,
          classes = _this$props.classes,
          mainLinks = _this$props.mainLinks,
          bottomLinks = _this$props.bottomLinks,
          expandMenu = _this$props.expandMenu,
          userLabel = _this$props.userLabel,
          imageUrl = _this$props.imageUrl;
      var _this$state = this.state,
          expandMenuInternal = _this$state.expandMenuInternal,
          secondaryMenuOptions = _this$state.secondaryMenuOptions,
          secondaryMenuParent = _this$state.secondaryMenuParent;
      var expandMenuCalc = expandMenu || expandMenuInternal;
      var showSecondaryMenu = expandMenuCalc && secondaryMenuOptions.length > 0;
      return _react["default"].createElement(_core.ClickAwayListener, {
        onClickAway: function onClickAway() {
          return _this2.onCollapse();
        }
      }, _react["default"].createElement("div", null, secondaryMenuParent && _react["default"].createElement(_SideSecondary.SideSecondary, {
        show: showSecondaryMenu,
        menuParent: secondaryMenuParent,
        onClose: function onClose() {
          return _this2.onCloseSecondaryMenu();
        },
        menuList: secondaryMenuOptions || []
      }), _react["default"].createElement(_core.Drawer, {
        classes: {
          paper: (0, _classnames["default"])(classes.menuBase, (_classNames = {}, _defineProperty(_classNames, classes.menuExpand, expandMenuCalc), _defineProperty(_classNames, classes.menuCollapse, !expandMenuCalc), _classNames))
        },
        variant: "permanent",
        open: true
      }, expandMenuCalc && _react["default"].createElement(_core.IconButton, {
        variant: "outlined",
        onClick: function onClick() {
          return _this2.onCollapse();
        },
        "aria-label": "Close",
        className: classes.closeButton
      }, _react["default"].createElement(_icons.Close, {
        fontSize: "small"
      })), _react["default"].createElement(_core.Avatar, {
        src: imageUrl,
        className: classes.avatarMain,
        onMouseOver: function onMouseOver() {
          return _this2.onMouseOver();
        }
      }, _react["default"].createElement(_icons.Person, null)), expandMenuCalc && _react["default"].createElement("p", {
        className: classes.userLabel
      }, userLabel), _react["default"].createElement(_core.Divider, {
        className: classes.divider
      }), _react["default"].createElement("div", {
        onMouseOver: function onMouseOver() {
          return _this2.onMouseOver();
        },
        style: {
          minHeight: 450
        }
      }, mainLinks.map(function (buttonConfig, index) {
        return _react["default"].createElement(_MenuButton.MenuButton, {
          key: index,
          config: buttonConfig,
          showLabel: expandMenuCalc,
          selected: buttonConfig.selected && _this2.state.selectedInternal.area === "byConfig" || _this2.state.selectedInternal.area === "main" && _this2.state.selectedInternal.index === index,
          onClick: function onClick() {
            return _this2.onClickMenu("main", index, buttonConfig);
          },
          onMouseOver: function onMouseOver() {
            return _this2.onMouseOverMenu(buttonConfig);
          }
        });
      }), _react["default"].createElement("div", {
        style: {
          bottom: 0,
          position: "absolute"
        }
      }, bottomLinks.map(function (buttonConfig, index) {
        return _react["default"].createElement(_MenuButton.MenuButton, {
          key: index,
          config: buttonConfig,
          showLabel: expandMenuCalc,
          selected: buttonConfig.selected && _this2.state.selectedInternal.area === "byConfig" || _this2.state.selectedInternal.area === "bottom" && _this2.state.selectedInternal.index === index,
          onClick: function onClick() {
            return _this2.onClickMenu("bottom", index, buttonConfig);
          },
          onMouseOver: function onMouseOver() {
            return _this2.onMouseOverMenu(buttonConfig);
          }
        });
      }))))));
    }
  }]);

  return SideStripComponent;
}(_react["default"].Component);

exports.SideStripComponent = SideStripComponent;
var SideStrip = (0, _core.withStyles)(_style.styles, {
  withTheme: true
})(SideStripComponent);
exports.SideStrip = SideStrip;