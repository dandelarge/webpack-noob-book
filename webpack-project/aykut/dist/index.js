"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
var root = (0, _client.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/_react["default"].createElement("h1", null, "Hello, world"));