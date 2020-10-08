class Sling{
  constructor(body1, point1){

    var options = {
      bodyA: body1,
      pointB: point1,
      stiffness: 0.05,
      length:400
    }
    this.sling = Constraint.create(options);
    World.add(world, this.sling)

  }

  fly(){

    this.sling.bodyA = null;
  }

  display(){

    if(this.sling.bodyA){
      var posA = this.sling.bodyA.position
      var posB = this.sling.pointB;
      push();
      fill("red")
      strokeWeight(10);
      stroke("blue")
      line(posA.x, posA.y, posB.x, posB.y);
      pop();
    }


  }



}