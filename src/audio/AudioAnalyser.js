export default class {
  constructor(source, fft) {
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
  createAnalyzer(player, fft = 64) {
    try {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const source = context.createMediaElementSource(player);
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
  getFrequencies(fn) {
    this.callback = fn;
    this.streamOn && window.requestAnimationFrame(this.getStream.bind(this));
  }
  startStream(){
    this.streamOn = true;
  }
  stopStream() {
    this.streamOn = false;
  }
  getStream(){
    this.debug && console.log('call getStream');
    this.streamOn && window.requestAnimationFrame(this.getStream.bind(this));
    this.analyser.getByteFrequencyData(this.frequencies);
    this.callback(this.frequencies);
  }
}