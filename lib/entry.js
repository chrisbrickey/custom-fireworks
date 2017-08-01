const Display = require("./display");
const Firework = require("./firework");
const Logic = require("./logic");

document.addEventListener("DOMContentLoaded", function(){
  const theCanvas = document.getElementById("myCanvas");
  theCanvas.width = 1000;
  theCanvas.height = 700;

  const ctx = theCanvas.getContext("2d");
  const button1 = document.getElementById("demo");


  const display = new Display(ctx);
  display.run();
  display.drawWithCanvas();
  display.drawWithEasel("myCanvas");
  display.drawWithTween("myCanvas");

  // display.subsequentObjects();

});
