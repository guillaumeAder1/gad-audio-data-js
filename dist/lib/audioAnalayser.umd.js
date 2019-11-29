(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.AudioAnalyser = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var _default =
  /*#__PURE__*/
  function () {
    function _default(params) {
      _classCallCheck(this, _default);

      console.warn(params);
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        console.log('inti test');
        return 'Lib loaded as expected...1';
      }
    }]);

    return _default;
  }();

  exports.AudioAnalyser = _default;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
