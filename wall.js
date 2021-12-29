class WallObject {
  constructor(x, y, w, h) {
    var body_proprieties = {
      isStatic: true
    }
  this.x = x;
    this.y = y;
  this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h, body_proprieties);
  
    World.add(world, this.body);
  }
  show() {
    var position = this.body.position;
    push();
  translate(position.x, position.y);
    rectMode(CENTER);
    stroke(255);
    fill("red");
    rect(0, 0, this.w, this.h);
    pop();
  }