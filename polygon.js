class Polygon {
constructor(x,y,radius){
   var options={
        restitution:1,
        density:1.2,
        friction:1
    }
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;


this.image = loadImage("TowerSiege-1-main/polygon.png");
World.add(world,this.body);



}
display(){
var pos = this.body.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.radius,this.radius);





    
    }






}