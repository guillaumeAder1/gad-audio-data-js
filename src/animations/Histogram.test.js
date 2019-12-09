import Histogram from './Histogram'

const canvasMock = {
  getContext: () => ({
    clearRect: jest.fn(),
    fillStyle: jest.fn(),
    fillRect: jest.fn(),
    beginPath: jest.fn(),
    rect: jest.fn(),
    stroke: jest.fn()
  }),
  width: 300,
  height: 300
}
describe('Histogram', () => {
  it('should create instance as expected', () => {
    const histo = new Histogram(canvasMock)
    expect(histo).not.toBe(null)
    expect(histo.align).toBe('bottom')
  })
  it('should set width adn height based on canvas size', () => {
    const histo = new Histogram(canvasMock)
    histo.setCanvasSize(canvasMock)
    expect(histo.width).toEqual(300)
    expect(histo.height).toEqual(300)
  })
  describe('shoudl calculate position for bottom align', () => {
    it('shoudl call calculate position for every item recevied as [data]', () => {
      Histogram.prototype.calculatePosition = jest.fn()
      const histo = new Histogram(canvasMock)
      histo.draw([150, 0, 300])
      // expect(histo.calculatePosition).to
      expect(histo).not.toBe(null)
    })
  })
})
