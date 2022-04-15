// Soldier
//Iteration 1: Soldier: Modify the Soldier class and add 2 methods to it:
//attack(), and receiveDamage().
//class: should receive 2 arguments (health & strength) + should receive the health
//property as its 1st argument + should receive the strength property as its 2nd
// argument

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}
let soldier1 = new Soldier(10, 5);
console.log(soldier1);
// Viking
//A Viking is a Soldier with an additional property, their name.
//They also have a different receiveDamage() method and new method, battleCry().
//Modify the Viking class, have it inherit from Soldier, re-implement the
//receiveDamage() method for Viking, and add a new battleCry() method.
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}
const Viking1 = new Viking('Arnaldo', 50, 30);
// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
  attack() {
    return this.strength;
  }
}

// War
class War {
  constructor() {}
  this.vikingArmy = [];
  this.saxonArmy = [];
  addViking(Viking) {
    this.vikingArmy.push(myNewViking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(myNewSaxon);
  }
  vikingAttack() {
    const VikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    const SaxonRandom = Math.floor(Math.random()* this.saxonArmy.length);
    const randomViking = this.vikingArmy[VikingRandom];
    const randomSaxon = this.saxonArmy[SaxonRandom];
    const myResult = SaxonRandom.receiveDamage(VikingRandom.strength);
    if (SaxonRandom.receiveDamage(VikingRandom.strength) < 0) {
      return this.saxonArmy.pop(SaxonRandom);
    }
    
  }
  saxonAttack() {}
}
const newSaxon = new Saxon();
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
