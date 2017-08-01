const Display = require("./display");
const Firework = require("./firework");
const Logic = require("./logic");
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

  let button1 = document.getElementById("demo");
  let demo = new Demo(demoCtx, canvasID, button1);
  demo.run();

});
