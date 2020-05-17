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
    super(name, health, strength)
    this.name = name
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
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
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

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
    this.randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    this.randomViking = Math.floor(Math.random() * this.vikingArmy.length)
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const damageMsg = this.saxonArmy[this.randomSaxon].receiveDamage(
      this.vikingArmy[this.randomViking].strength
    )

    if (this.saxonArmy[this.randomSaxon].health <= 0) {
      this.saxonArmy.splice(this.randomSaxon, 1)
    }

    return damageMsg
  }

  saxonAttack() {
    const damageMsg = this.vikingArmy[this.randomViking].receiveDamage(
      this.saxonArmy[this.randomSaxon].strength
    )

    if (this.vikingArmy[this.randomViking].health <= 0) {
      this.vikingArmy.splice(this.randomViking, 1)
    }

    return damageMsg
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`
    } else if (this.saxonArmy.length && this.vikingArmy.length) {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
