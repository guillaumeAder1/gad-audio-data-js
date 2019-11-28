import 'core-js/modules/es6.regexp.split';

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

// Enable LiveReload
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1"></' + 'script>');

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
    }
  }]);

  return AudioAnalyser;
}();

export default AudioAnalyser;
