class Box {
  constructor(x, y, width, height) {
    var options ={
      'density':1.0,
      'friction':1.0,
      isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    this.image=loadImage("dustbingreen.png")
    World.add(world, this.body);
  }
  display(){
    rectMode(CENTER);
    fill("blue");
    image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);

}

}