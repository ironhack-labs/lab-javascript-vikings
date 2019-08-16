// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = function() {
    return this.strength
  }
  this.receiveDamage = function(damage) {
    this.health -= damage
  }
}

// Viking
function Viking(name, health, strength) {
  // Solo los llama
  Soldier.call(this, health, strength)
  this.name = name
  this.receiveDamage = function(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  this.battleCry = function() {
    return 'Odin Owns You All!'
  }
}
// Herede la estructura
Viking.prototype = Object.create(Soldier.prototype)

// Saxon
function Saxon(health, strength) {
  // Solo los llama
  Soldier.call(this, health, strength)
  this.receiveDamage = function(damage) {
    // this.health = this.health - damage
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return 'A Saxon has died in combat'
    }
  }
}
// Hace que herede la estructura del padre ? 😰
Saxon.prototype = Object.create(Soldier.prototype)

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []
  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking)
  }
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  this.vikingAttack = function() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

    const randomSaxon = this.saxonArmy[randomSaxonIndex]
    const randomViking = this.vikingArmy[randomVikingIndex]

    const msg = randomSaxon.receiveDamage(randomViking.strength)

    // Remove dead saxons from the army
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1)
    }

    return msg
  }
  this.saxonAttack = function() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

    const randomSaxon = this.saxonArmy[randomSaxonIndex]
    const randomViking = this.vikingArmy[randomVikingIndex]

    const msg = randomViking.receiveDamage(randomSaxon.strength)

    // Remove dead saxons from the army
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1)
    }

    return msg
  }
  this.showStatus = function() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
