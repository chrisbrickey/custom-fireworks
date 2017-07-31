document.addEventListener("DOMContentLoaded", function(){
  const theCanvas = document.getElementById("myCanvas");
  theCanvas.width = 1000;
  theCanvas.height = 700;

  const ctx = theCanvas.getContext("2d");


  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, 1000, 700);

  ctx.transform(-1, 0, 0, 1, 10, 690);
  //
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, -50, -200);

  ctx.beginPath();
  ctx.arc(-300, -300, 25, 0*Math.PI, 2*Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(-400, -400, 25, 0*Math.PI, 2*Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-350, -350);
  ctx.lineTo(-400, -370);
  ctx.lineTo(-400, -375);
  ctx.fillStyle = "yellow";
  ctx.fill();



});
