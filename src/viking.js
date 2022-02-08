// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
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
    super(health, strength);
    this.name = name
  }


  receiveDamage(damage) {
    this.health -= damage
    if (this.health  > 0) {
      return `${this.name} has received ${damage} points of damage`

    } else {
      return `${this.name} has died in act of combat`
  }
} 

  battleCry () {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  attack () {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return "A Saxon has died in combat"
    }
  }
}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

addViking(Viking) {
  this.vikingArmy.push(Viking)
}
addSaxon(Saxon) {
  this.saxonArmy.push(Saxon)
}
vikingAttack() {
  this.saxonArmy[0].strength -= this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)

  if (this.saxonArmy[0].health <= 0) {
    this.saxonArmy.pop(this.saxonArmy[0])
  }

}


saxonAttack() {
  Viking.strength -= Viking.receiveDamage(Saxon.strength)

}
showStatus() {

}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
