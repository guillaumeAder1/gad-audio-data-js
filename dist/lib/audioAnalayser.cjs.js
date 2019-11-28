'use strict';

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

var AudioAnalyser =
/*#__PURE__*/
function () {
  function AudioAnalyser(params) {
    _classCallCheck(this, AudioAnalyser);

    console.log('test');
  }

  _createClass(AudioAnalyser, [{
    key: "init",
    value: function init() {
      console.log('inti test');
      return 'Lib loaded as expected...';
    }
  }]);

  return AudioAnalyser;
}();

module.exports = AudioAnalyser;
