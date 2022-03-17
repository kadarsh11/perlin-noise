const [width, height] = [500, 500];

function setup() {
  createCanvas(width, height);
  frameRate(10);
}

let inc = 0.01;
let start = 10;
function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xOff = start;
  //   console.log("XOOOFF", xOff);
  for (let i = 0; i < width; i++) {
    let y = noise(xOff) * 300;
    // let x = height / 2 + (sin(xOff) * height) / 2;
    // x = x + t;
    stroke(255);
    vertex(i, y);
    xOff = xOff + inc;
  }
  endShape();
  start = start + inc;
  //   noLoop();
  //   //   console.log(x, y);
  //   ellipse(x, y, 20, 20);
  //   fill(255);
}
