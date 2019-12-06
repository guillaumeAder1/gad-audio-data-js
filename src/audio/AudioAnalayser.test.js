import AudioAnalyser from './AudioAnalyser';
// jest.mock('./AudioAnalyser');

const mockCreateAnalyzer = jest.fn();
AudioAnalyser.prototype.createAnalyzer = mockCreateAnalyzer;
mockCreateAnalyzer.mockReturnValue(true);

global.window = { requestAnimationFrame: jest.fn() };

describe('AudioAnalyser', () => {
  it('should create an AudioAnalyser class', () => {
    const audio = new AudioAnalyser({});
    expect(audio).not.toBe(null);
    expect(audio.callback).toEqual(undefined)
    expect(audio.debug).toEqual(true)
    expect(audio.createAnalyzer).toHaveBeenCalled();
    // expect(audio.createAnalyzer()).toEqual(true);
  });
  it('getFrequencies should create callback function', () => {
    const audio = new AudioAnalyser({});
    const fn = () => 'test';
    expect(audio.streamOn).toEqual(false);
    audio.getFrequencies(fn);
    expect(audio.callback()).toEqual('test');
    expect(audio.streamOn).toEqual(true);
  });
  // xit('should return an error', () => {
  //   const audio = new AudioAnaylser(source)
  //   expect(audio).not.toBe(null);
  // });
});