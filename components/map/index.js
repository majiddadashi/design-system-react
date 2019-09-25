"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shortid = _interopRequireDefault(require("shortid"));

var _icon = _interopRequireDefault(require("../icon"));

var _constants = require("../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var displayName = _constants.MAP;
var propTypes = {
  /**
   * CSS class names to be added with `slds-map` class. `array`, `object`, or `string` are accepted.
   */
  className: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),

  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  classNameContainer: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),

  /**
   * HTML id for component.
   */
  id: _propTypes.default.string,

  /**
   *  Labels
   *  * `title` - Title for the Map component.
   */
  labels: _propTypes.default.shape({
    title: _propTypes.default.string
  }),

  /**
   * Array of locations objects for the Map component.**
   * Each location object can contain:
   *  * `id` : A unique identifier string for the location
   *  * `name` : Name of the location
   *  * `address` : Address of the location
   */
  locations: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    address: _propTypes.default.string.isRequired
  })).isRequired,

  /**
   * Callback function triggered when a location is selected
   */
  onClickLocation: _propTypes.default.func,

  /**
   * Accepts a Google Map API Key that will be used for showing the map
   */
  googleAPIKey: _propTypes.default.string.isRequired,

  /**
   *  Accepts location object that will be selected to shown on load
   *  * `id` : A unique identifier string for the location
   *  * `name` : Name of the location
   *  * `address` : Address of the location
   */
  selection: _propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    address: _propTypes.default.string.isRequired
  })
};
/**
 * A map component is used to find a location
 */

var Map =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    var _this;

    _classCallCheck(this, Map);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event, i) {
      if (typeof _this.props.onClickLocation === 'function') _this.props.onClickLocation(event, _this.props.locations[i]);
    });

    _this.generatedId = _shortid.default.generate();
    return _this;
  }
  /**
   * Get the Map's HTML id. Generate a new one if no ID present.
   */


  _createClass(Map, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
    /**
     * Handles clicking of a location
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        id: this.getId(),
        className: (0, _classnames.default)("slds-grid", {
          'slds-has-coordinates': this.props.locations
        }, this.props.classNameContainer)
      }, _react.default.createElement("div", {
        className: "slds-map_container"
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)("slds-map", this.props.className)
      }, _react.default.createElement("iframe", {
        id: "".concat(this.getId(), "-google-map"),
        title: this.props.labels.title,
        src: "https://www.google.com/maps/embed/v1/place?key=".concat(this.props.googleAPIKey, "&q=").concat(encodeURIComponent(this.props.selection.address))
      }))), this.props.locations.length > 1 ? _react.default.createElement("div", {
        className: "slds-coordinates"
      }, _react.default.createElement("div", {
        className: "slds-coordinates__header"
      }, _react.default.createElement("h2", {
        className: "slds-coordinates__title"
      }, "".concat(this.props.labels.title, " (").concat(this.props.locations.length, ")"))), _react.default.createElement("ul", {
        className: "slds-coordinates__list"
      }, this.props.locations.map(function (location, i) {
        return _react.default.createElement("li", {
          key: location.id,
          className: "slds-coordinates__item"
        }, _react.default.createElement("span", {
          className: "slds-assistive-text",
          "aria-live": "polite"
        }, "".concat(location.name, " is currently selected")), _react.default.createElement("button", {
          type: "button",
          onClick: function onClick(event) {
            return _this2.handleClick(event, i);
          },
          className: "slds-coordinates__item-action slds-button_reset slds-media",
          "aria-pressed": _this2.props.selection.id === location.id
        }, _react.default.createElement("span", {
          className: "slds-media__figure"
        }, _react.default.createElement(_icon.default, {
          category: "standard",
          name: "account"
        })), _react.default.createElement("span", {
          className: "slds-media__body"
        }, _react.default.createElement("span", {
          className: "slds-text-link"
        }, location.name), _react.default.createElement("span", null, location.address))));
      }))) : null);
    }
  }]);

  return Map;
}(_react.default.Component);

Map.displayName = displayName;
Map.propTypes = propTypes;
var _default = Map;
exports.default = _default;