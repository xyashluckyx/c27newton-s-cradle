class Bob{
    constructor(x,y){
        var option={
            isStatic:false,
            'restitution':1.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,40,option);
        this.pixel=100;

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill("pink");
        ellipseMode(CENTER)
        ellipse(0,0,this.pixel);
        pop()     
    }

}