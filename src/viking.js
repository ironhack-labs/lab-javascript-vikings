// Soldier
class Soldier {

  constructor(health, strength) {
    this.health = health
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
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }


}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  vikingAttack() {

    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const saxonAttacked = this.saxonArmy[saxonIndex]

    const vikingAttacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const result = saxonAttacked.receiveDamage(vikingAttacker.attack())

    if (saxonAttacked.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1)
    }
    return result

  }
  saxonAttack() {

    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const vikingAttacked = this.vikingArmy[vikingIndex]

    const saxonAttacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const result = vikingAttacked.receiveDamage(saxonAttacker.attack())

    if (vikingAttacked.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1)
    }
    return result
  }

  attack(attacker) {
    const saxonSelector = Math.floor(Math.random() * this.saxonArmy.length)
    const vikingSelector = Math.floor(Math.random() * this.vikingArmy.length)

    if (attacker === "saxon") {
      vikingSelector.receiveDamage(this.vikingArmy[saxonSelector].attack())
    } else {
      saxonSelector.receiveDamage(this.saxonArmy[vikingSelector].attack())
    }

    if (vikingSelector.health <= 0) {
      this.vikingArmy.splice(vikingSelector, 1)
    } else if (saxonSelector.health <= 0) {
      this.saxonArmy.splice(saxonSelector, 1)
    }

    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

//NECESITAMOS
// -health del attacked
// quitar de los army
//si arm < 0 gana el atacante

//TENEMOS
//army
// 




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
