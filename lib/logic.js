class Logic {
  constructor(ctx, demoButton) {
    // this.ctx = ctx;
    this.demoButton = demoButton;
    this.playDemo = this.playDemo.bind(this);

  }

  run() {
    console.log("I'm the logic!");
    this.demoButton.addEventListener("click", this.playDemo);
  }


  playDemo() {

  }




}
