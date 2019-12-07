import AudioAnalyser from './AudioAnalyser';
import AudioContextMock from './__mocks__/AudioContextMock';

global.window = { 
  requestAnimationFrame: jest.fn(),
  AudioContext: AudioContextMock
};
describe('AudioAnalyser', () => {
  it('should create instance as expected', () => {
    const audio = new AudioAnalyser({});
    expect(audio).not.toBe(null);
    expect(audio.streamOn).toBe(false);
    expect(audio.callback).toBe(undefined);
  });
  it('should return an error source param is missing', () => {
    expect(() => {new AudioAnalyser()}).toThrow('Source is not defined');
  });
  it('getFrequency should assign the callback method', () => {
    const audio = new AudioAnalyser({});
    expect(audio.callback).toBe(undefined);
    const fn = (val) => val;
    audio.getFrequencies(fn)
    expect(audio.callback).toBe(fn);
    expect(audio.callback(3)).toEqual(3);
  });
});
