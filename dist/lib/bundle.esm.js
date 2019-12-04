import 'core-js/modules/es6.typed.uint8-array';

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
  function _default(source, fft) {
    _classCallCheck(this, _default);

    if (!source) {
      throw 'Source is not defined';
    }

    this.streamOn = true;
    this.debug = false;
    this.createAnalyzer(source, fft);
  }
  /**
   * @param {HTML5 Audio Element} player - audio element playing the song
   */


  _createClass(_default, [{
    key: "createAnalyzer",
    value: function createAnalyzer(player) {
      var fft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;

      try {
        var context = new (window.AudioContext || window.webkitAudioContext)();
        var source = context.createMediaElementSource(player);
        this.analyser = context.createAnalyser();
        this.analyser.fftSize = fft;
        source.connect(this.analyser);
        this.analyser.connect(context.destination);
        this.frequencies = new Uint8Array(this.analyser.frequencyBinCount);
        this.debug && console.log('analyser created');
      } catch (error) {
        throw 'Audio context not supported';
      }
    }
    /**
     * @param {Function} fn - callback function to get frequency from instance
     */

  }, {
    key: "getFrequencies",
    value: function getFrequencies(fn) {
      this.callback = fn;
      this.streamOn && window.requestAnimationFrame(this.getStream.bind(this));
    }
  }, {
    key: "startStream",
    value: function startStream() {
      this.streamOn = true;
    }
  }, {
    key: "stopStream",
    value: function stopStream() {
      this.streamOn = false;
    }
  }, {
    key: "getStream",
    value: function getStream() {
      this.debug && console.log('call getStream');
      this.streamOn && window.requestAnimationFrame(this.getStream.bind(this));
      this.analyser.getByteFrequencyData(this.frequencies);
      this.callback(this.frequencies);
    }
  }]);

  return _default;
}();

export { _default as AudioAnalyser };
