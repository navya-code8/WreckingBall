class Box{

    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{density:0.04, friction:1.0, restitution:0.8 })
        this.height = h;
        this.width = w;
        World.add(world,this.body);
    
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("white")
        strokeWeight(1.5);
        stroke("red")
        rect(0,0,this.width, this.height);
        pop();


    }

}