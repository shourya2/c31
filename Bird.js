class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = [];
    this.smokeimage = loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.speed>10 && this.body.position.x>200 && gameState === "launch"){
    var position = [this.body.position.x , this.body.position.y];
    this.path.push(position);
    }

    for(var i = 0; i < this.path.length; i=i+1){
      push ();
      image(this.smokeimage,this.path[i][0],this.path[i][1]);
      pop ();
    }
  }
}
