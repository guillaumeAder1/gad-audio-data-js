export default class {
  constructor(props) {
    this.canvas = props.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.max = 255
    this.color = props.color || '#00a0dd';
    this.name = props.name || '..Bar..'
    this.setCanvasSize(this.canvas);
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
    console.log(this.name)
    const { ctx, width, height } = this
    const step = width / data.length;
    // clear before redraw
    ctx.clearRect(0, 0, width, height);
    // draw bg color
    ctx.fillStyle = '#141414';
    ctx.fillRect(0, 0, width, height);
    // start drawing bars
    for (var i = 0; i < data.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "red";
        ctx.rect(i * step, this.calcY(data[i]), step, height);
        ctx.stroke();
    }
  }
  destroy() {

  }
}
