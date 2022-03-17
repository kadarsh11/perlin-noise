const [width, height] = [500, 500];

function setup() {
  createCanvas(width, height);
  frameRate(10);
  //   pixelDensity(1);
}
var inc = 0.01;
let start = [0, 100, 255];
function draw() {
  background(51);
  loadPixels();
  let yOff = 0;
  for (let y = 0; y < height; y++) {
    let xOff = 0;
    for (let x = 0; x < width; x++) {
      // this is used to get the 4 filled RGBA pixel spot from array
      const px = (x + y * width) * 4;
      const [r, g, b] = start.map((_) => noise(xOff + _, yOff + _) * 255);
      //   const [r, g, b] = (xOff = xOff + 0.2323);
      pixels[px + 0] = r;
      pixels[px + 1] = g;
      pixels[px + 2] = b;
      pixels[px + 3] = 255;
      xOff += inc;
    }
    yOff += inc;
  }
  start = start.map((_) => _ + inc);
  updatePixels();
  //   noLoop();
}
