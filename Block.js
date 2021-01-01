class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<5){
        this.pos=this.body.position;
       push();
       translate(this.pos.x,this.pos.y)
       rectMode(CENTER);
       fill("red")
       rect(0,0,30,40);
       pop();
   }
   else{
       World.remove(world,this.body);
       push();
       tint(255,this.visibility);
       this.visibility=this.visibility-5;
       pop();
   }
    }
}