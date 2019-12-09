import AudioAnalyser from './AudioAnalyser'

global.window = { requestAnimationFrame: jest.fn() }

describe('AudioAnalyser', () => {
  beforeEach(() => {
    const mockCreateAnalyzer = jest.fn()
    AudioAnalyser.prototype.createAnalyzer = mockCreateAnalyzer
    AudioAnalyser.prototype.startStream = jest.fn()
    AudioAnalyser.prototype.getStream = jest.fn()
    mockCreateAnalyzer.mockReturnValue(true)
  })
  it('should create an AudioAnalyser class', () => {
    const audio = new AudioAnalyser({})
    expect(audio).not.toBe(null)
    expect(audio.callback).toEqual(undefined)
    expect(audio.createAnalyzer).toHaveBeenCalled()
  })
  it('getFrequencies should create callback function and call startStream', () => {
    const audio = new AudioAnalyser({})
    const fn = () => 'test'
    expect(audio.streamOn).toEqual(false)
    audio.getFrequencies(fn)
    expect(audio.callback()).toEqual('test')
    expect(audio.startStream).toHaveBeenCalled()
  })
  it('callback should return value passed in getFrequencies', () => {
    const audio = new AudioAnalyser({})
    audio.getFrequencies(() => [1, 2, 3])
    expect(audio.callback()).toEqual([1, 2, 3])
  })
})
describe('test props', () => {
  it('should call getStream', () => {
    const audio = new AudioAnalyser({})
    expect(audio.streamOn).toEqual(false)
  })
})
