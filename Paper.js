class Paper {
constructor(x,y,angle){
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Matter.Bodies.circle(x, y, 25, options);
    this.radius = 25
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }      
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    stroke("white")
    fill("white")
    circle(0,0,this.radius);
    imageMode(CENTER);
    image(this.image, 30 ,0,120,120,this.radius);
    pop();
  }
}