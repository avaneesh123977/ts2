class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':1.5
    }  

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("box.png")
    this.visibility=255;
    
    World.add(world, this.body);
  }

  display(){

    if(this.body.speed<3){
      push();
      translate(this.body.position.x, this.body.position.y);
      angleMode(RADIANS);
      rotate(this.body.angle)
      imageMode(CENTER);
      fill(995,95,19);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body)
      push();
      this.visibility-=5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }

  }
}