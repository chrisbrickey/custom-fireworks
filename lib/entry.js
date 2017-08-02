const Display = require("./display");
const Firework = require("./firework");
const Pellet = require("./pellet");
// const Logic = require("./logic");
const Demo = require("./demo");

document.addEventListener("DOMContentLoaded", function(){
  const canvasID = "myCanvas";

  const mainCanvas = document.getElementById(canvasID);
  const mainCtx = mainCanvas.getContext("2d");
  mainCanvas.width = 1000;
  mainCanvas.height = 700;

  let display = new Display(mainCtx, canvasID);
  display.run();
  // display.drawWithCanvas();
  // display.drawWithEasel();
  display.drawWithTween();


  let demoCanvas = document.getElementById(canvasID);
  let demoCtx = demoCanvas.getContext("2d");
  demoCanvas.width = 1000;
  demoCanvas.height = 700;

  let button1 = document.getElementById("demo");
  let demo = new Demo(demoCtx, canvasID, button1);
  demo.run();

  let fireworkCanvas = document.getElementById(canvasID);
  let fireworkCtx = fireworkCanvas.getContext("2d");
  fireworkCanvas.width = 1000;
  fireworkCanvas.height = 700;



  //every time we launch a firework, we need to do 3 things:
  //1) clearScreen (not opaque black)
  //2) time it....use requestAnimFrame to be more efficient
  //3) draw the firework (made up of particles)

});
