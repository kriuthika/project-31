class Particle{
    constructor(x,y,r)
    {
        var options = {
        
            'restitution':0.4,
        
        }
       
        this.r=r;
       // this.image = loadImage("paper.png")
 this.body  = Bodies.circle(this.x, this.y, this.r, options)
this.color=color(random(0, 255),random(0, 255),random(0, 255));
  World.add(world, this.body);
           
    }

   
    display()
	{  
        var pos = this.body.position;   
        var angle = this.body.angle;
        	push();
			translate(pos.x, pos.y);
            rotate(angle)
            //strokeWeight(4);
            fill(this.color)
            //rotate(this.angle)
            ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);
			pop();
    }
}