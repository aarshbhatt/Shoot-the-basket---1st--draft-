class Ball{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	    var options = {
            isStatic : false,
            'restitution':0.3,
			'friction':0,
			'density':1.2 
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

        this.image = loadImage("ball.png")

	}
	display()
	{
			var ball=this.body.position;	
			var angle = this.body.angle
				
			push()
			translate(ball.x, ball.y);
			rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball  
			ellipseMode(RADIUS);	
			ellipse(0,0,this.r,this.r);	
            imageMode(CENTER);
            image(this.image,0,0,125,125);
			pop()
	}

}

