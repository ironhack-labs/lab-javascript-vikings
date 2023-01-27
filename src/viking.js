// Soldier
class Soldier {
  constructor(health, strength) {
    //
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    //
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0)
      return `${this.name} has received ${theDamage} points of damage`;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}
//
// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0)
      return `A Saxon has received ${theDamage} points of damage`;
    if (this.health <= 0) return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(VikingObject) {}

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    // console.log()
  }

  saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  }

  showStatus() {}
}

//
//
// let soldier = new Soldier()
