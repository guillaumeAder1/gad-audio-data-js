import AudioAnaylser  from "./AudioAnalyser";
let audio;
let source;

describe('AudioAnalyser', () => {
  beforeEach(() => {
  });
  it('should have a contructor', () => {
    source = new Audio();
    audio = new AudioAnaylser(source);
    expect(audio).not.toBe(null);
  });
  it('should return an error', () => {
    const audio = new AudioAnaylser(source)
    expect(audio).not.toBe(null);
  });
})