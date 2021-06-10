// Soldier
class Soldier {
  constructor ( health, strength) {
      this.health = health,
      this.strength = strength      
  }
  attack () {
      return this.strength
  }
  receiveDamage (damage) {
      this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry() {
    return 'Odin Owns You All!'
  } 
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) return this.name + `${name} has received ${damage} points of damage`;
    if (this.health <= 0) return this.name + `${name} has died in act of combat`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
    if (this.health <= 0) return `A Saxon has died in combat`;
  }
}

// War
class War {}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
