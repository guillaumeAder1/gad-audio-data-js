export default class AudioContextMock {
  createMediaElementSource () {
    return {
      connect: () => {}
    }
  }

  createAnalyser () {
    return {
      connect: () => {},
      frequencyBinCount: [300, 150, 0],
      getByteFrequencyData: () => {}
    }
  }
}
