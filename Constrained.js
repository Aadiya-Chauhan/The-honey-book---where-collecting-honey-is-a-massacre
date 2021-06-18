class Constrained{
    constructor(bodyA, pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffnes:0.05,
        }
        this.pointB = pointB;
        this.rubber = Constraint.create(options);
        World.add(world, this.rubber);
    }

    attach(bodyA) {
        this.rubber.bodyA = bodyA
    }

    fly() {
        this.rubber.bodyA = null
    }

    display() {

        if(this.rubber.bodyA) {

        var pointA = this.rubber.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}