class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.image = loadImage("images/walking_1.png");
        this.radius = 50;
        this.umbrella = Bodies.circle(x,y,50,options);
        World.add(world,this.umbrella);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.umbrella.position.x, this.umbrella.position.y + 70,300,300);
    }
}