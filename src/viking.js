// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)

    if (this.health > 0) {
      return `A Viking has received ${damage} points of damage`
    } else {
      return `A Viking has died in combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}


// Saxon
class Saxon extends Soldier {


  receiveDamage(damage) {
    super.receiveDamage(damage)
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {

      return `A Saxon has died in combat`
    }
  }
}
// War

class War {
  addViking() { }

  addSaxon() { }

  vikingAttack() { }
  saxonAttack() { }
  showStatus() { }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
