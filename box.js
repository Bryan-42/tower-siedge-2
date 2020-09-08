class Box{
    constructor(x,y,width,height){
        var options ={
            isStatic : false,
            restitution : 0.3,
            friction : 0.2,
            density : .2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        this.image = loadImage("3C2A20.jpeg");;
        World.add(world,this.body);
    }
    display(){
        if (this.body.speed < 4){
            var pos = this.body.position;
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER);
          fill("255");
          rect(0,0,this.width,this.height);
          pop();
        }
        else{
           push();
           imageMode(CENTER);
           image(this.image, this.body.position.x, this.body.position.y, 30, 40);
           pop();
           World.remove(world,this.body);
        }
    }
}