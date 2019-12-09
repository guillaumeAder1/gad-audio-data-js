export default class AudioContextMock {
  createMediaElementSource () {
    return {
      connect: () => {}
    }
  }

  createAnalyser () {
    return {
      connect: () => {},
      frequencyBinCount: [1, 2, 3],
      getByteFrequencyData: () => {}
    }
  }
}
