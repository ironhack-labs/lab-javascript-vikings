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

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    else if (this.health <= 0) {
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
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    let attack = saxon.receiveDamage(viking.strength)

    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1)
    }

    return attack

  }
  saxonAttack() {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    let attack2 = viking.receiveDamage(saxon.strength)

    if (viking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1)
    }
    return attack2
  }


  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
    else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
