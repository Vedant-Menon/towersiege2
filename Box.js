class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density:0.04,
          friction:0.1,
          restitution:1.1
              }
      
      
      this.Visibility = 255
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
    console.log(this.body.speed)
    if(this.body.speed<3){
      var angle = this.body.angle
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    pop()}
    else{
      World.remove(world,this.body)
      push()
      this.Visibility = this.Visibility-5;
      pop()
    }
}
  };