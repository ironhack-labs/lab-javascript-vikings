// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
   console.log(this.strength);
  }
  receiveDamage(damage) {
    console.log(this.health - damage);
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
  if (this.health > 0) {
    console.log(`${this.name} has received ${damage} points of damage`);
  } else {
    console.log(`${this.name} has died in act of combat`);
  }
}
battleCry(){
  console.log("Odin Owns You All!");
}
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
}
receiveDamage(damage) {
  if (this.health > 0) {
    console.log(`A Saxon has received ${damage} points of damage`);
  } else {
    console.log(`A Saxon has died in act of combat`);
  }
}
}
// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
