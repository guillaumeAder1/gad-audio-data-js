'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('core-js/modules/es6.typed.uint8-array');

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

    this.streamOn = false;
    this.debug = false;
    this.createAnalyzer(source, fft);
  }
  /**
   * @param {HTML5 Audio Element} player - audio element playing the song
   * @param {Number} fft - frequency array size, 64 return array.length = 32
   */


  _createClass(_default, [{
    key: "createAnalyzer",
    value: function createAnalyzer(player) {
      var fft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;

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
      this.startStream();
    }
  }, {
    key: "startStream",
    value: function startStream() {
      this.streamOn = true;
      window.requestAnimationFrame(this.getStream.bind(this));
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

var _default$1 =
/*#__PURE__*/
function () {
  function _default(props) {
    _classCallCheck(this, _default);

    this.canvas = props.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.max = 255;
    this.color = props.color || '#00a0dd';
    this.name = props.name || '..Bar..';
    this.setCanvasSize(this.canvas);
  }

  _createClass(_default, [{
    key: "setCanvasSize",
    value: function setCanvasSize(canvas) {
      this.width = canvas.width;
      this.height = canvas.height;
    }
  }, {
    key: "calcY",
    value: function calcY(val) {
      var perc = val / this.max;
      return this.height - this.height * perc;
    }
  }, {
    key: "draw",
    value: function draw(data) {
      console.log(this.name);
      var ctx = this.ctx,
          width = this.width,
          height = this.height;
      var step = width / data.length; // clear before redraw

      ctx.clearRect(0, 0, width, height); // draw bg color

      ctx.fillStyle = '#141414';
      ctx.fillRect(0, 0, width, height); // start drawing bars

      for (var i = 0; i < data.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "red";
        ctx.rect(i * step, this.calcY(data[i]), step, height);
        ctx.stroke();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return _default;
}();

exports.AudioAnalyser = _default;
exports.Histogram = _default$1;
