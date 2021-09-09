// slide to see how detailY works
let detailY;
let d=1000;
function setup() {
  cnv = createCanvas(400, 400, WEBGL);
  cnv.mouseMoved(changeSize); 
  detailY = createSlider(3, 16, 3);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  background(205, 102, 94);
  fill('grey');
  rotateY(millis() / d/16);
  cone(100, 95, 12, detailY.value());
}

function changeSize() {
  d = d + 2;
  if (d > 100) {
    d = 0;
  }
}