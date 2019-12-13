/* eslint-disable jest/no-mocks-import */
import Histogram from './Histogram'
import canvasMock from './__mocks__/canvasMock'

const mockCalculate = jest.fn(() => ({
  x: 2,
  y: 2,
  height: 2,
  width: 3
}))

describe('Histogram', () => {
  it('should create instance as expected', () => {
    const histo = new Histogram(canvasMock)
    expect(histo).not.toBe(null)
    expect(histo.align).toBe('bottom')
  })
  it('should set width and height based on canvas size', () => {
    const histo = new Histogram(canvasMock)
    histo.setCanvasSize(canvasMock)
    expect(histo.width).toEqual(300)
    expect(histo.height).toEqual(300)
  })
  it('should set align value if correct', () => {
    const histo = new Histogram(canvasMock)
    expect(() => (histo.align = 'top')).not.toThrow()
    expect(histo.align).toEqual('top')
    expect(() => (histo.align = '')).toThrow()
    expect(histo.align).toEqual('top')
  })
  describe('calculateBarSize implementation', () => {
    it('calculateBarSize should return 300/4 = 75', () => {
      const histo = new Histogram(canvasMock, 'left')
      expect(histo.calculateBarSize(4)).toBe(75)
    })
    it('calculateBarSize should return...', () => {
      const histo = new Histogram(canvasMock, 'top')
      expect(histo.calculateBarSize(4)).toBe(75)
    })
  })
  describe('should calculate position', () => {
    it('shoudl call calculate position for every item recevied as [data]', () => {
      const histo = new Histogram(canvasMock)
      histo.calculatePosition = mockCalculate
      histo.draw([150, 0, 300])
      expect(histo.calculatePosition).toHaveBeenCalledTimes(3)
      mockCalculate.mockClear()
      histo.draw([1, 2, 3, 4, 5, 6])
      expect(histo.calculatePosition).toHaveBeenCalledTimes(6)
    })
    it('should call calculate position with correct argument', () => {
      const histo = new Histogram(canvasMock, 'bottom')
      histo.calculatePosition = mockCalculate
      const data = [300, 150, 0]
      histo.draw(data)
      expect(histo.calculatePosition).toHaveBeenCalledWith(100, 0, 300)
      expect(histo.calculatePosition).toHaveBeenCalledWith(100, 1, 150)
      expect(histo.calculatePosition).toHaveBeenCalledWith(100, 2, 0)
    })
    describe('calculate bottom pos', () => {
      it('should return y=0 && height=300 when value is 255', () => {
        const histo = new Histogram(canvasMock)
        const calculate = histo.calculatePosition(100, 0, 255)
        expect(calculate.x).toBe(0)
        expect(calculate.y).toBe(0)
        expect(calculate.width).toBe(100)
        expect(calculate.height).toBe(300)
      })
      it('should return y=300 && height=300 when value is 0', () => {
        const histo = new Histogram(canvasMock)
        const calculate = histo.calculatePosition(100, 0, 0)
        expect(calculate.x).toBe(0)
        expect(calculate.y).toBe(300)
        expect(calculate.width).toBe(100)
        expect(calculate.height).toBe(300)
      })
    })
    describe('calculate top pos', () => {
      it('should return y=0 && height=300 when value is 255', () => {
        const histo = new Histogram(canvasMock, 'top')
        const calculate = histo.calculatePosition(100, 0, 255)
        expect(calculate.x).toBe(0)
        expect(calculate.y).toBe(0)
        expect(calculate.width).toBe(100)
        expect(calculate.height).toBe(300)
      })
      it('should return y=0 && height=0 when value is 0', () => {
        const histo = new Histogram(canvasMock, 'top')
        const calculate = histo.calculatePosition(100, 0, 0)
        expect(calculate.x).toBe(0)
        expect(calculate.y).toBe(0)
        expect(calculate.width).toBe(100)
        expect(calculate.height).toBe(0)
      })
    })
    describe('calculate left pos', () => {
      it('should return x=0 && width=300 when value is 255', () => {
        const histo = new Histogram(canvasMock, 'left')
        const calculate = histo.calculatePosition(100, 0, 255)
        expect(calculate.x).toBe(0)
        expect(calculate.y).toBe(0)
        expect(calculate.width).toBe(300)
        expect(calculate.height).toBe(100)
      })
      it('should return y=0 && height=0 when value is 0', () => {
        const histo = new Histogram(canvasMock, 'left')
        const calculate = histo.calculatePosition(100, 0, 0)
        expect(calculate.x).toBe(0)
        expect(calculate.y).toBe(0)
        expect(calculate.width).toBe(0)
        expect(calculate.height).toBe(100)
      })
    })
    describe('calculate right pos', () => {
      it('should return x=0 && width=300 when value is 255', () => {
        const histo = new Histogram(canvasMock, 'right')
        const calculate = histo.calculatePosition(100, 0, 255)
        expect(calculate.x).toBe(0)
        expect(calculate.y).toBe(0)
        expect(calculate.width).toBe(300)
        expect(calculate.height).toBe(100)
      })
      it('should return y=0 && height=0 when value is 0', () => {
        const histo = new Histogram(canvasMock, 'right')
        const calculate = histo.calculatePosition(100, 0, 0)
        expect(calculate.x).toBe(300)
        expect(calculate.y).toBe(0)
        expect(calculate.width).toBe(300)
        expect(calculate.height).toBe(100)
      })
    })
  })
})
