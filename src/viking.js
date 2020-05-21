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
    super.receiveDamage(damage)
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
  receiveDamage(damage) {
    super.receiveDamage(damage)
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
    //this.randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    //this.randomViking = Math.floor(Math.random() * this.vikingArmy.length)
  }

  getRandomSoldier(array) {
    return Math.floor(Math.random() * array.length)
  }

  getRandomSaxon() {
    return this.saxonArmy[this.getRandomSoldier(this.saxonArmy)]
  }

  getRandomViking() {
    return this.vikingArmy[this.getRandomSoldier(this.vikingArmy)]
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const damageMsg = this.getRandomSaxon().receiveDamage(
      this.getRandomViking().attack()
    )

    if (this.getRandomSaxon().health <= 0) {
      this.saxonArmy.splice(this.getRandomSaxon(), 1)
    }

    return damageMsg
  }

  saxonAttack() {
    const damageMsg = this.getRandomViking().receiveDamage(
      this.getRandomSaxon().attack()
    )

    if (this.getRandomViking().health <= 0) {
      this.vikingArmy.splice(this.getRandomViking(), 1)
    }

    return damageMsg
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
