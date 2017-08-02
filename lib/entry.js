const Display = require("./display");
// const Firework = require("./firework");
// const Pellet = require("./pellet");
// const Logic = require("./logic");
const Demo = require("./demo");

document.addEventListener("DOMContentLoaded", function(){
  const canvasID = "myCanvas";

  const mainCanvas = document.getElementById(canvasID);
  const mainCtx = mainCanvas.getContext("2d");
  mainCanvas.width = 10000;
  mainCanvas.height = 10000;

  let display = new Display(mainCtx, canvasID);


  let demoCanvas = document.getElementById(canvasID);
  let demoCtx = demoCanvas.getContext("2d");
  // demoCanvas.width = 1000;
  // demoCanvas.height = 700;

  let button1 = document.getElementById("demo");
  let demo = new Demo(demoCtx, canvasID, button1);
  demo.run();



  //every time we launch a firework, we need to do 3 things:
  //1) clearScreen (not opaque black)
  //2) time it....use requestAnimFrame to be more efficient
  //3) draw the firework (made up of particles)

});
