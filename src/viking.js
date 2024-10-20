// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }
  attack () {
    return this.strength
  }
  receiveDamage (damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage (damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry () {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage (damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
  attack () {
    return this.strength
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking (viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon (saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack () {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomSaxon = this.saxonArmy[randomSaxonIndex]
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const randomViking = this.vikingArmy[randomVikingIndex]

    const result = randomSaxon.receiveDamage(randomViking.strength)

    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0)

    return result
  }
  saxonAttack () {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const randomViking = this.vikingArmy[randomVikingIndex]

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomSaxon = this.saxonArmy[randomSaxonIndex]

    const result = randomViking.receiveDamage(randomSaxon.strength)

    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0)

    return result
  }
  showStatus () {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
