// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = function () {
    return this.strength
  }
  this.receiveDamage = function (damage) {
    this.health -= damage
  }

}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name
  this.attack = function () {
    return this.strength
  }
  this.receiveDamage = function (damage) {
    this.health -= damage
    if (this.health > 0) {
      return (`${this.name} has received ${damage} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    }
  }
  this.battleCry = function () {
    return ('Odin Owns You All!')
  }
}

Viking.prototype = Object.create(Soldier.prototype)



// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
  this.attack = function () {
    return this.strength
  }
  this.receiveDamage = function (damage) {
    this.health -= damage
    if (this.health > 0) {
      return (`A Saxon has received ${damage} points of damage`)
    } else {
      return (`A Saxon has died in combat`)
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype)

// War
function War() {
  this.saxonArmy = []
  this.vikingArmy = []
  this.addViking = function (viking) {
    this.vikingArmy.push(viking)
  }
  this.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon)
  }
  this.vikingAttack = function () {
    let returnValue = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.shift()
    }
    return returnValue
  }
  this.saxonAttack = function () {
    let returnValue = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.shift()
    }
    return returnValue
  }
  this.showStatus = function () {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return ("Vikings and Saxons are still in the thick of battle.")
    } else if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return ("Vikings have won the war of the century!")
    } else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
      return ("Saxons have fought for their lives and survive another day...")
    }
  }
}