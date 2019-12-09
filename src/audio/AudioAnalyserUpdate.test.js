/* eslint-disable jest/no-mocks-import */
import AudioAnalyser from './AudioAnalyser'
import AudioContextMock from './__mocks__/AudioContextMock'

global.window = {
  requestAnimationFrame: jest.fn(),
  AudioContext: AudioContextMock
}
describe('AudioAnalyser', () => {
  it('should create instance as expected', () => {
    const audio = new AudioAnalyser({})
    expect(audio).not.toBe(null)
    expect(audio.streamOn).toEqual(false)
    expect(audio.callback).toEqual(undefined)
    expect(audio.callback).toEqual(undefined)
  })
  it('should return an error if params is invalid', () => {
    expect(() => new AudioAnalyser()).toThrow('Source is not defined')
    expect(() => new AudioAnalyser({})).not.toThrow()
    expect(() => new AudioAnalyser({}, 24)).not.toThrow()
  })
  it('should set streamOn to true or false', () => {
    const audio = new AudioAnalyser({})
    expect(audio.streamOn).toEqual(false)
    audio.startStream()
    expect(audio.streamOn).toEqual(true)
    audio.stopStream()
    expect(audio.streamOn).toEqual(false)
  })
  it('should call requestAnimationFrame', () => {
    const audio = new AudioAnalyser({})
    audio.startStream()
    expect(window.requestAnimationFrame).toHaveBeenCalled()
  })
  it('getFrequency should assign the callback method', () => {
    const audio = new AudioAnalyser({})
    expect(audio.callback).toBe(undefined)
    const fn = (val) => val
    audio.getFrequencies(fn)
    expect(audio.callback).toBe(fn)
    expect(audio.callback(3)).toEqual(3)
  })
  it('geStream should return frequencies as Uint8Array in a callback function', () => {
    const audio = new AudioAnalyser({})
    audio.getFrequencies(res => {
      expect(res.join('')).toEqual('123')
      expect(res).toEqual(new Uint8Array([1, 2, 3]))
    })
  })
})
