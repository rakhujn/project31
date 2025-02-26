class Particle{
    constructor(x, y, r){
        var options = {
            restitution : 0.4
        }

        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 225), random(0, 225), random(0, 225));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke(0);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();

    }
};