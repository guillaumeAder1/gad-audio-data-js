export default class {
  constructor(source, fft) {
    if (!source) {
      throw 'Source is not defined';
    }
    this.streamOn = false;
    this.debug = true;
    this.createAnalyzer(source, fft);
  }
  log(msg, type = 'log') {
    this.debug && console[type](msg);
  }
  /**
   * @param {HTML5 Audio Element} player - audio element playing the song
   * @param {Number} fft - frequency array size, 64 return array.length = 32
   */
  createAnalyzer(player, fft = 32) {
    try {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      // const source = context.createMediaElementSource(player);
      // this.analyser = context.createAnalyser();
      // this.analyser.fftSize = fft;
      // source.connect(this.analyser);
      // this.analyser.connect(context.destination);
      // this.frequencies = new Uint8Array(this.analyser.frequencyBinCount);
      // this.log('analyser created');
    } catch (error) {
      const msg = 'Audio context not supported';
      this.log(msg,'warn');
      throw msg;
    }
  }
  /**
   * @param {Function} fn - callback function to get frequency from instance
   */
  getFrequencies(fn) {
    this.log('get frequencies');
    this.callback = fn;
    this.startStream();
  }
  startStream(){
    this.log('start stream')
    this.streamOn = true;
    window.requestAnimationFrame(this.getStream.bind(this));
  }
  stopStream() {
    this.log('stopStream');
    this.streamOn = false;
  }
  getStream(){
    this.log('call getStream');
    this.streamOn && window.requestAnimationFrame(this.getStream.bind(this));
    this.analyser.getByteFrequencyData(this.frequencies);
    this.callback(this.frequencies);
  }
}