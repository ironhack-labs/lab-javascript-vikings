// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;

  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    if (this.health > 0) {
      this.health -= damage;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;

  }
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `${this.name} has received ${this.damage} points of damage`
    } else if (this.health === 0) {
      return `${this.name} has died in act of combat`
    }

    }

    battleCry(){
      return 'Odin own you all !'
    }
  }



// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`
    } else if (this.health === 0) {
      return `A Saxon has died in act of combat`
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
