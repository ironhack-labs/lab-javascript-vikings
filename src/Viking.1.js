const { Soldier } = require("./viking");

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(this.name);
    this.name = name;
  }
}
