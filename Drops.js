class Drops{
    constructor(x,y,radius){
        var option={
            restitution: 0.1,
            friction:0

        }
        this.body=Bodies.circle(x,y,radius,option);
     //   this.radius=20;
     this.radius=radius
     this.color=rgb(random(20,70),random(30,50),random(100,230))
     
      //  this.color=color(0,0,135)
      //  this.image=loadImage("Drops.png")
        
        World.add(world,this.body)
    }
    dropFalling(speed){
        this.y +=speed
    }
    update(){
        if(this.body.position.y>900){
            Matter.Body.setPosition(this.body,{x:random(0,3000),y:random(-100,0)})


        }



    }


    display(){
     //   fill(this.color);
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        fill(this.color)
        ellipse(0,0,this.radius);

        pop();

    }
   

}