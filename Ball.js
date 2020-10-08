class Ball{

    constructor(x,y,r){

        this.body = Bodies.circle(x,y,r,{density: 1.0, frictionAir: 0.005})
        this.radius = r;
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("lightgray")
        ellipse(0,0,this.radius*2, this.radius*2)
        pop();

    }


}