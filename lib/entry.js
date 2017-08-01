const Display = require("./display");
const Firework = require("./firework");
const Logic = require("./logic");

document.addEventListener("DOMContentLoaded", function(){
  const canvasID = "myCanvas";
  const theCanvas = document.getElementById(canvasID);
  theCanvas.width = 1000;
  theCanvas.height = 700;

  const ctx = theCanvas.getContext("2d");
  let button1 = document.getElementById("demo");


  let display = new Display(ctx, canvasID);
  display.run();
  display.drawWithCanvas();
  display.drawWithEasel();
  display.drawWithTween();

  // display.subsequentObjects();

});
