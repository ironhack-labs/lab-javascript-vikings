// Soldier

class Soldier {
  constructor (healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
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
  constructor (nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg)
    this.name = nameArg
    super.attack ()
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
  constructor (healthArg, strengthArg) {
    super(healthArg, strengthArg)
    super.attack ()
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
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() { 
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let randomVicking = Math.floor(Math.random() * this.vikingArmy.length)
    let damageRecievedFromViking = this.vikingArmy[randomVicking].strength
    this.saxonArmy[randomSaxon].receiveDamage(damageRecievedFromViking)
    let saxonRemainingHealth = this.saxonArmy[randomSaxon].health - this.vikingArmy[randomVicking].strength
    if (saxonRemainingHealth <= 0) {
      this.saxonArmy.slice(randomSaxon, randomSaxon + 1)
    }

    return this.saxonArmy[randomSaxon].receiveDamage(damageRecievedFromViking)
  }


saxonAttack() { 
  let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
  let randomVicking = Math.floor(Math.random() * this.vikingArmy.length)
  let damageRecievedFromSaxon = this.saxonArmy[randomSaxon].strength
  this.vikingArmy[randomVicking].receiveDamage(damageRecievedFromSaxon)
  let vikingRemainingHealth = this.vikingArmy[randomVicking].health - this.saxonArmy[randomSaxon].strength

  if (vikingRemainingHealth <= 0) {
    this.vikingArmy.slice(randomVicking, randomVicking + 1)
  }

  return this.vikingArmy[randomVicking].receiveDamage(damageRecievedFromSaxon)
}

showStatus() {
  let status
  if (this.saxonArmy == []) { // Aquí he probado también con this.saxonArmy == undefined y con this.saxonArmy.length == 0 y no sale
    status = "Vikings have won the war of the century!"
  }
  if (this.vikingArmy == []) {
    status ='Saxons have fought for their lives and survive another day...'
  }
  if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
    status = 'Vikings and Saxons are still in the thick of battle.'
  }
  return status
}

}
