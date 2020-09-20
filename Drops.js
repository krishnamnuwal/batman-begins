class Drops{
    constructor(x,y,width,height){
        var option={
           // density:0.4,
            friction:0

        }
        this.body=Bodies.rectangle(x,y,width,height,option);
     //   this.radius=20;
     this.width=width;
     this.height=height;
        this.image=loadImage("drop.png");
      //  this.color=color(0,0,135)
      //  this.image=loadImage("Drops.png")
        
        World.add(world,this.body)
    }
    dropFalling(speed){
        this.y +=speed
    }
    display(){
     //   fill(this.color);
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);

        pop();

    }
    reset(){
        if(this.body.position.y>1000){
            this.body.position.x=this.x
            this.body.position.y=this.y
        }
    }

}