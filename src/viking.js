// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack () { 
    return this.strength
  }

  receiveDamage(damage) { 
    this.health -= damage
  }
}
Object.freeze(Soldier)


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) { 
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) { 
    this.health -= damage
    let message = ""
    this.health > 0 ? 
      message = `${this.name} has received ${damage} points of damage`
      :
      message = `${this.name} has died in act of combat`
    return message
  }

  battleCry = () => { 
    return "Odin Owns You All!"
  }
}
Object.freeze(Viking)


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super (health, strength)
  }

  receiveDamage(damage) { 
    this.health -= damage
    let message = ""
    this.health > 0 ?
      (message = `A Saxon has received ${damage} points of damage`)
      :
      (message = `A Saxon has died in combat`)
    return message
  }
}
Object.freeze(Saxon)


// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
    this.armyHeadCount = this.saxonArmy.length + this.vikingArmy.length
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const random = Math.floor(Math.random() * this.vikingArmy.length)
    const randomViking = this.vikingArmy[random]
    const randomSaxon = this.saxonArmy[random]
    let message = ""

    randomSaxon.receiveDamage(randomViking.attack())
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(random, 1)
      message = "A Saxon has died in combat"
    } else {
      message = `A Saxon has received ${randomViking.strength} points of damage`
    }

    return message
  }

  saxonAttack() {
    const random = Math.floor(Math.random() * this.saxonArmy.length)
    const randomSaxon = this.saxonArmy[random]
    const randomViking = this.vikingArmy[random]
    let message = ""

    randomViking.receiveDamage(randomSaxon.attack())
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(random, 1)
      message = "A Viking has died in combat"
    } else {
      message = `${randomViking.name} has received ${randomSaxon.strength} points of damage`
    }

    return message
  }

  showStatus() {
    let message = ""
    if (this.saxonArmy.length === 0) {
      message = "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      message = "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length && this.vikingArmy.length > 0) {
      message = "Vikings and Saxons are still in the thick of battle."
    } else {
      message = "A total massacre, no single soul survived."
    }

    return message
  }
}
Object.freeze(War)
