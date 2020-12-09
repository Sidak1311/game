class ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.4,
            friction:1,
            frictionAir:.3
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill("orange")
        ellipse(pos.x,pos.y,this.radius, this.radius)
    }
}