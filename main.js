const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Nyan {
  constructor() {
    this.x = 30;
    this.y = 30;
    this.width = 250;
    this.height = 198;
    this.img = new Image();
    this.img.src = 'https://im4.ezgif.com/tmp/ezgif-4-c503b64c6ee6.png';
    this.aux = 0;
  }
  draw() {
    if (this.aux >= 3000) this.aux = 0;
    ctx.drawImage(this.img, this.aux, 0, 250, 198, this.x, this.y, this.width, this.height);
    this.aux += 250;
  }
}

const nyan = new Nyan();

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  nyan.draw();
}, 1000 / 30);
