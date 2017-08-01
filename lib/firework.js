class Firework {
  constructor(pos, target, vel, color, usePhysics) {
    this.pos = {
      x: pos.x || 0,
      y: pos.y || 0
    };

    this.target = {
      x: this.target.x || 0,
      y: this.target.y || 0
    };

    this.vel = {
      x: this.vel.x || 0,
      y: this.vel.y || 0
    };

    this.color = color;

    this.usePhysics = usePhysics || false;
  
  }




}


module.exports = Firework;
