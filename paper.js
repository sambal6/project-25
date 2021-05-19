class Paper{
    constructor(x,y,r){

  var options={
      isStatic: false,
      friction: 0,
      density : 1.2,
      restitution : 0.3
  }
        this.x=x;
		this.y=y;
        this.r = r;
   this.body =Bodies.circle(this.x,this.y,this.r,options)  
   
   this.image = loadImage("paper.png")
   World.add(world,this.body)

}
display(){
    var paperPos=this.body.position;		
  var angle = this.body.angle;
			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)

            fill("black")
			image(this.image, 0,0,48,48)
			pop()
}

}