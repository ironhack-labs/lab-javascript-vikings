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
    let message = ''
    if (this.health > 0) {
      this.health -= damage
      message = `${this.name} has received ${damage} points of damage`
    }
    if (this.health <= 0) {
      message = `${this.name} has died in act of combat`
    }
    return message
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(damage) {
    let message = ''
    if (this.health > 0) {
      this.health -= damage
      message = `A Saxon has received ${damage} points of damage`
    }
    if (this.health <= 0) {
      message = `A Saxon has died in combat`
    }
    return message
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    const newSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const newViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    const war = newSaxon.receiveDamage(newViking.attack())

    if (newSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(newSaxon), 1)
    }
    return war
  }
  saxonAttack() {
    const newSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const newViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    const war = newViking.receiveDamage(newSaxon.attack())

    if (newViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(newViking), 1)
    }
    return war
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    Soldier,
    Viking,
    Saxon,
    War
  };
}