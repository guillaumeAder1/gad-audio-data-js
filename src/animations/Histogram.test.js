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
  width: 255,
  height: 255
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
    expect(histo.width).toEqual(255)
    expect(histo.height).toEqual(255)
  })
  it('shoudl calculate position for bottom', () => {
    const histo = new Histogram(canvasMock)
    histo.draw([255, 100, 0])
    expect(histo).not.toBe(null)
  })
})
