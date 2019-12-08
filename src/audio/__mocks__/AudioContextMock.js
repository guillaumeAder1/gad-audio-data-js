export default class AudioContextMock {
  constructor() {

  }
  createMediaElementSource() { 
    return {
      connect: () => {}
    }
  }
  createAnalyser() { 
    return {
      connect: () => {},
      frequencyBinCount: [1,2,3],
      getByteFrequencyData: () => {}
    }
  }
}