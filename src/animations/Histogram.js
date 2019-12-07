export default class {
  constructor(canvas, align = 'bottom', options = {
    stroke: 'red',
    background: 'black',
    name: 'histogram'
  }) {
    this.ctx = canvas.getContext('2d');
    this.max = 255
    this.color = options.stroke;
    this.name = options.name;
    this.background = options.background;
    this.align = align;
    this.setCanvasSize(canvas);
  }

  setCanvasSize(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
  }
  calcY(val) {
    const perc = val / this.max;
    return this.height - (this.height * perc);
  }
  draw(data) {
    const { ctx, width, height, align } = this
    const step = width / data.length;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = this.background;
    ctx.fillRect(0, 0, width, height);
    // start drawing bars
    for (var i = 0; i < data.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = this.color;
        const pos = this.calculatePosition(align, step, i, data[i]);
        ctx.rect(pos.x, pos.y, pos.width, pos.height);
        // ctx.rect(i * step, this.calcY(data[i]), step, height);
        ctx.stroke();
    }
  }
  calculatePosition(align, step, index, value) {
    let res;
    switch (align) {
      case 'bottom':
        res = {
          x: index * step,
          y: this.height - (this.height * (value / this.max)),
          width: step,
          height: this.height
        }
        break;
    
      default:
        break;
    }
    return res;
    
  }

  destroy() {

  }
}
