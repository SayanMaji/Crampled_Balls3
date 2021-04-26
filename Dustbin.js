class Bin{
    constructor(x,y,width,height){
        var options = {
            isStatic :true,
            friction :2.0
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,250);
        
    }
}
