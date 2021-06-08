// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = 150;  
  }
  attack = function attack() {
    return this.strength
  }
  receiveDamage = function receiveDamage(damage) {
    this.health -= damage;

  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    // this.health -= damage;
    // super.receiveDamage(damage);
    console.log('this is the health' + this.health)
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
    // return 1
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}


// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

let viking1 = new Viking(`Thor`, 100, 150)
viking1.receiveDamage(20)
// console.log(viking1.health)