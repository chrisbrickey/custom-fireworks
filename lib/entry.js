document.addEventListener("DOMContentLoaded", function(){
  const theCanvas = document.getElementById("myCanvas");
  theCanvas.width = 500;
  theCanvas.height = 500;

  const ctx = theCanvas.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(300, 40, 500, 500);

  // ctx.beginPath();
  // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  // ctx.strokeStyle = "green";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "blue";
  // ctx.fill();
});
