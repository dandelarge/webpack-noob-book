(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Button);
    global.app = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_Button) {
  "use strict";

  _Button = _interopRequireDefault(_Button);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  // Clear the existing HTML content
  document.body.innerHTML = '<div id="app"></div>';

  // Render your React component instead
  var root = ReactDOM.createRoot(document.getElementById('app'));
  root.render( /*#__PURE__*/React.createElement(_Button["default"], null, "Click me"));
});