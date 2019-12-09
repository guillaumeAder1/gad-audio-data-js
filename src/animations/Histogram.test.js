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
  describe('should calculate position', () => {
    beforeEach(() => {
      // jest.mockReset()
    })
    it('shoudl call calculate position for every item recevied as [data]', () => {
      Histogram.prototype.calculatePosition = jest.fn(() => ({
        x: 2,
        y: 2,
        width: 2,
        height: 2
      }))
      const histo = new Histogram(canvasMock)
      histo.draw([150, 0, 300])
      expect(histo.calculatePosition).toHaveBeenCalledTimes(3)
      Histogram.prototype.calculatePosition.mockClear()
      histo.draw([1, 2, 3, 4, 5, 6])
      expect(histo.calculatePosition).toHaveBeenCalledTimes(6)
      // Histogram.prototype.calculatePosition.mockReset()
    })
    it('should calculate position for botton algin', () => {
      // const histo = new Histogram(canvasMock, 'bottom')
      // const data = [300, 150, 0]
      // histo.draw(data)
      // expect(histo.calculatePosition).toHaveBeenCalledWith(0, 0, 300)
    })
  })
})
