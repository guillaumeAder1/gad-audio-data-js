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
  it('should return an error if params is invalid', () => {
    expect(() => new AudioAnalyser()).toThrow('Source is not defined');
    expect(() => new AudioAnalyser({})).not.toThrow();
    expect(() => new AudioAnalyser({}, 24)).not.toThrow();
  });
  it('should set streamOn to true or false', () => {
    const audio = new AudioAnalyser({});
    expect(audio.streamOn).toEqual(false);
    audio.startStream();
    expect(audio.streamOn).toEqual(true);
    audio.stopStream();
    expect(audio.streamOn).toEqual(false);
  });
  it('should call requestAnimationFrame', () => {
    const audio = new AudioAnalyser({});
    audio.startStream();
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });
  it('getFrequency should assign the callback method', () => {
    const audio = new AudioAnalyser({});
    expect(audio.callback).toBe(undefined);
    const fn = (val) => val;
    // console.log(audio.getFrequencies(fn))
    // console.log(audio.frequencies);
    expect(audio.callback).toBe(fn);
    expect(audio.callback(3)).toEqual(3);
  });
});
