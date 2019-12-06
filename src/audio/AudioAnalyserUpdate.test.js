import AudioAnalyser from './AudioAnalyser';

global.window = { 
  requestAnimationFrame: jest.fn()
};
class AudioContextMock {
  constructor() {

  }
}
beforeEach(() => {
  window.AudioContext = {}
});
describe('one', () => {
  beforeEach(() => {

  })

  it('create instance', () => {
    const audio = new AudioAnalyser({});
    expect(audio).not.toBe(null)
  })
});
