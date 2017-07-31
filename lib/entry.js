document.addEventListener("DOMContentLoaded", function(){
  const theCanvas = document.getElementById("myCanvas");
  theCanvas.width = 1000;
  theCanvas.height = 700;

  const ctx = theCanvas.getContext("2d");
  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, 1000, 700);
});
