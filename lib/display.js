//atom plugin throwing error that create.js not defined, but seems to be working fine

class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.fireworks = [];

  }

  run() {
    console.log("I'm the display!");
  }

  drawWithCanvas() {
    this.ctx.fillStyle = 'transparent';
    this.ctx.fillRect(0, 0, 1000, 700);

    this.ctx.transform(-1, 0, 0, 1, 10, 690);

    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, -50, -200);

    this.ctx.beginPath();
    this.ctx.arc(-300, -300, 25, 0*Math.PI, 2*Math.PI);
    this.ctx.fillStyle = "red";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(-400, -400, 25, 0*Math.PI, 2*Math.PI);
    this.ctx.fillStyle = "blue";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(-325, -325);
    this.ctx.lineTo(-375, -325);
    this.ctx.lineTo(-350, -375);
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.ctx.fillStyle = "yellow";
    this.ctx.fill();


  }

  subsequentObjects() {
    //could pass object into this
    console.log("in subsequent Objects fxn");
  }

  drawWithEasel(canvasID) {
    let stage = new createjs.Stage(canvasID);
    let circle = new createjs.Shape();
    circle.graphics.beginFill("orange").drawCircle(0, 0, 50);
    circle.x = 200;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
  }


  drawWithTween(canvasID) {
    let stage = new createjs.Stage(canvasID);
    let circle = new createjs.Shape();
    circle.graphics.beginFill("green").drawCircle(0, 0, 50);
    circle.x = 400;
    circle.y = 500;
    stage.addChild(circle);
    stage.update();

    createjs.Tween.get(circle, { loop: false })
      .to({ y: 400 }, 2000, createjs.Ease.getPowInOut(10))
      .to({ alpha: 0, x: 175 }, 1000, createjs.Ease.getPowInOut(2))
      .to({ alpha: 0, x: 225 }, 200)
      .to({ alpha: 1, x: 200 }, 1000, createjs.Ease.getPowInOut(2))
      .to({ y: 100 }, 800, createjs.Ease.getPowInOut(2));

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }





}


module.exports = Display;
