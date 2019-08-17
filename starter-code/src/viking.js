// Soldier
function Soldier(health, strength) {
  this.health = 300
  this.strength = 150
  this.attack = function() {
    return this.strength
  }
  this.receiveDamage = function(attack) {
    this.health -= attack
  }
}

// Viking
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

function Viking(name, health, strength) {
  this.attack = function() {
    return this.strength
  }
  this.strength = 150
  this.health = 300
  this.name = 'Harald'
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

Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon
// Saxon
function Saxon(health, strength) {
  this.health = 60
  this.strength = 25
  this.attack = function() {
    return this.strength
  }
  this.receiveDamage = function(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return 'A Saxon has died in combat'
    }
  }
}

// War

function War() {
  this.vikingArmy = []
  this.saxonArmy = []
  this.addViking = function(viking) {
    ;[this.vikingArmy.push(viking)]
  }
  this.addSaxon = function(saxon) {
    ;[this.saxonArmy.push(saxon)]
  }
  this.vikingAttack = function() {
    let saxonAttacked = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.shift()
    }
    return saxonAttacked
  }
  this.saxonAttack = function() {
    let vikingAttacked = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.shift()
    }
    return vikingAttacked
  }
  this.showStatus = function() {
    if (this.saxonArmy <= 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy <= 0) {
      return `Saxons have fought for their lives and survive another day...`
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
