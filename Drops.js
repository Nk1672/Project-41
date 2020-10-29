class Drops{
    constructor(x,y){
        var options={
            friction: 0.1
        }
        this.radius = 4;
        this.rain = Bodies.circle(x,y,4,options);
        this.color = color("blue");
        this.rain.lifetime = height;
        World.add(world,this.rain);
     }

    display(){
        ellipseMode(CENTER);
        var pos = [this.rain.position.x,this.rain.position.y];
        fill(this.color);
        ellipse(pos[0],pos[1],this.radius);
     }

    update(){
        if(frameCount %100 === 0){
            if(this.rain.position.y > height){
                Matter.Body.setPosition(this.rain,{x: random(0,400), y: random(0,400)});
             }
         }
     }
}