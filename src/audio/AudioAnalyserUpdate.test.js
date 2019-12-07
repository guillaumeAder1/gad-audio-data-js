import AudioAnalyser from './AudioAnalyser';
import AudioContextMock from './__mocks__/AudioContextMock';

global.window = { 
  requestAnimationFrame: jest.fn(),
  AudioContext: AudioContextMock
};
describe('one', () => {
  it('create instance', () => {
    const audio = new AudioAnalyser({});
    expect(audio).not.toBe(null)
  })
});
