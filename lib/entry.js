const Display = require("./display");
const Firework = require("./firework");

document.addEventListener("DOMContentLoaded", function(){
  const theCanvas = document.getElementById("myCanvas");
  theCanvas.width = 1000;
  theCanvas.height = 700;

  const ctx = theCanvas.getContext("2d");
  const display = new Display(ctx);
  display.run();
  display.draw();

});
