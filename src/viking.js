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
  constructor(health, strength) {
    super(health, strength)
  }
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
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let attackedSaxon = this.saxonArmy[saxonIndex]
    let attackingViking = this.vikingArmy[vikingIndex]
    let result = attackedSaxon.receiveDamage(attackingViking.attack())
    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1)
    }
    return result
  }

  saxonAttack() {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let attackingSaxon = this.saxonArmy[saxonIndex]
    let attackedViking = this.vikingArmy[vikingIndex]
    let result = attackedViking.receiveDamage(attackingSaxon.attack())
    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1)
    }
    return result
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}

let war = new War()
war.addViking({ name: 'Fred', health: 40, strength: 24 })
war.addViking({ name: 'Håkan', health: 60, strength: 45 })
war.addViking({ name: 'Gert', health: 53, strength: 10 })
war.addViking({ name: 'Bo', health: 540, strength: 22 })
war.addViking({ name: 'Runar', health: 130, strength: 56 })
war.addViking({ name: 'Harald', health: 100, strength: 85 })

war.addSaxon({ health: 80, strength: 19 })
war.addSaxon({ health: 70, strength: 24 })
war.addSaxon({ health: 90, strength: 54 })
war.addSaxon({ health: 30, strength: 94 })
war.addSaxon({ health: 20, strength: 14 })
// console.log(war)

war.vikingAttack()
war.saxonAttack()
