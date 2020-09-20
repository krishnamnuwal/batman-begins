class Umbrella{
    constructor(x,y,radius){
        var option={
          isStatic:true
        }
        this.body=Bodies.circle(x,y,radius,option);
      /*  this.width=width;
        this.height=height;*/
        this.radius=radius;
    /*    this.x=mouseX;
        this.y=mouseY*/
        this.image=loadImage("umbrella.png")
        World.add(world,this.body);


    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius)
    }
}