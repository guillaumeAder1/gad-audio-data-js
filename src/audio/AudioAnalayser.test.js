import AudioAnaylser from "./AudioAnalyser";

const AudioContextMock = {
  createMediaElementSource: (el) => ({
    connect: () => {}
  }),
  createAnalyser: () => ({
    connect: () => {},
    frequencyBinCount: []
  }),
};
let AudioContext = {};
beforeEach(() => {
  // window.AudioContext = () => AudioContextMock;
});
describe('AudioAnalyser', () => {
  it('should have a contructor', () => {
    const audio = new AudioAnaylser({});
    expect(audio.createAnalyzer).toHaveBeenCalled();
    // expect(audio).not.toBe(null);
  });
  // xit('should return an error', () => {
  //   const audio = new AudioAnaylser(source)
  //   expect(audio).not.toBe(null);
  // });
})