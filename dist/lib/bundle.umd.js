(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es6.typed.uint8-array')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es6.typed.uint8-array'], factory) :
  (global = global || self, factory(global.AudioTool = {}));
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

      if (!params && !params.source) {
        throw 'Source is not defined';
      }

      console.warn(params);
      this.createAnalyzer(params.source, params.fft);
    }
    /**
     * @param {HTML5 Audio Element} player - audio element playing the song
     */


    _createClass(_default, [{
      key: "createAnalyzer",
      value: function createAnalyzer(player) {
        var fft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;
        var context = new (window.AudioContext || window.webkitAudioContext)();
        var source = context.createMediaElementSource(player);
        this.analyser = context.createAnalyser();
        this.analyser.fftSize = fft;
        source.connect(this.analyser);
        this.analyser.connect(context.destination);
        this.frequencies = new Uint8Array(this.analyser.frequencyBinCount);
      }
    }, {
      key: "getFrequencies",
      value: function getFrequencies() {
        this.analyser.getByteFrequencyData(this.frequencies);
        return this.frequencies;
      }
    }]);

    return _default;
  }();

  exports.AudioAnalyser = _default;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
