class Ground{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("saddlebrown")
        //console.log(this.height)
        rect(0,0,this.width,this.height)
        pop();
        
    }


}