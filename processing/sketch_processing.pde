void setup() {
  size(600, 600, P3D);
  noStroke();
}

void draw() {
  background(30);
  lights();

  float t = millis() / 1000.0;

  pushMatrix();

  float x = sin(t) * 100;
  float y = cos(t) * 50;
  translate(width/2 + x, height/2 + y, 0);

  rotateY(t);

  float s = map(sin(t * 2), -1, 1, 0.5, 1.5);
  scale(s);

  drawPyramid(100);
  popMatrix();
}

void drawPyramid(float size) {
  float h = size;

  beginShape(TRIANGLES);

  fill(255, 100, 100);
  vertex(0, -h/2, 0);
  vertex(-size/2, h/2, -size/2);
  vertex(size/2, h/2, -size/2);

  fill(100, 255, 100);
  vertex(0, -h/2, 0);
  vertex(size/2, h/2, -size/2);
  vertex(size/2, h/2, size/2);

  fill(100, 100, 255);
  vertex(0, -h/2, 0);
  vertex(size/2, h/2, size/2);
  vertex(-size/2, h/2, size/2);

  fill(255, 255, 100);
  vertex(0, -h/2, 0);
  vertex(-size/2, h/2, size/2);
  vertex(-size/2, h/2, -size/2);

  endShape();


  beginShape(QUADS);
  fill(150);
  vertex(-size/2, h/2, -size/2);
  vertex(size/2, h/2, -size/2);
  vertex(size/2, h/2, size/2);
  vertex(-size/2, h/2, size/2);
  endShape();
}
