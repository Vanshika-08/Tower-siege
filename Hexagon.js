class hexagon{
    constructor(x, y, width){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingShot = new SlingShot(this.polygon,{x:100, y:200});
    }

display(){
    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    slingShot.display();
}
    
}

function mouseDragged(){
    Matter.Body.setposition(this.polygon,{x:mouseX, y:mouseY});

}

function mouseReleased(){
    slingShot.fly();
}