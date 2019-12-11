export default class {
  constructor (
    canvas,
    align = 'bottom',
    options = {
      stroke: 'red',
      background: 'black',
      name: 'histogram'
    }
  ) {
    this.defaultAlign = ['top', 'bottom', 'left', 'right']
    this.ctx = canvas.getContext('2d')
    this.max = 255
    this.color = options.stroke
    this.name = options.name
    this.background = options.background
    this._align = align
    this.setCanvasSize(canvas)
  }

  setCanvasSize (canvas) {
    this.width = canvas.width
    this.height = canvas.height
  }

  set align (value) {
    if (this.defaultAlign.includes(value)) {
      this._align = value
    } else {
      throw Error(
        `Error: incorrect align value: [${value}] is not a allowed, 
        use one of [${this.defaultAlign.join(', ')}] instead`
      )
    }
  }

  get align () {
    return this._align
  }

  draw (data) {
    const { ctx, width, height } = this
    const barWidth = width / data.length
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = this.background
    ctx.fillRect(0, 0, width, height)
    // start drawing bars
    for (var i = 0; i < data.length; i++) {
      ctx.beginPath()
      ctx.lineWidth = '2'
      ctx.strokeStyle = this.color
      const { x, y, width, height } = this.calculatePosition(
        barWidth,
        i,
        data[i]
      )
      ctx.rect(x, y, width, height)
      ctx.stroke()
    }
  }

  calculatePosition (step, index, value) {
    let res
    switch (this._align) {
      case 'bottom':
        res = {
          x: index * step,
          y: this.height - this.height * (value / this.max),
          width: step,
          height: this.height
        }
        break
      case 'top':
        res = {
          x: index * step,
          y: 0,
          height: this.height * (value / this.max),
          width: step
        }
        break

      default:
        break
    }
    return res
  }

  destroy () {}
}
