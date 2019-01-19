// Soldier

function Soldier(health, strength) {
  this.health = health
  this.strength = strength
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage
}

Soldier.prototype.attack = function () {
  return this.strength
}

//  Viking
function Viking (name, health, strength) {
  Soldier.call (this, health, strength) 
  this.name = name

  this.receiveDamage = function (damage) {
    this.health -= damage
    if (this.health <= 0) {
      return this.name + " has died in act of combat"
    } else {
      return this.name + " has received " + damage + " points of damage"
    }
  }

  this.battleCry = function () {
    return "Odin Owns You All!"
  }
}

Viking.prototype = Object.create(Soldier.prototype)



// Saxon
function Saxon(health, strength) {
  Soldier.call (this,health,strength)

  this.receiveDamage = function (damage) {
    this.health -= damage
    if (this.health <= 0) {
      return "A Saxon has died in combat"
    } else {
      return "A Saxon has received " + damage + " points of damage"
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype)

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push (viking)
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push (saxon)
}

War.prototype.vikingAttack = function () {
  let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
  let randomViking = this.vikingArmy[vikingIndex]
  let randomSaxon = this.saxonArmy[saxonIndex]
  
  let saxonCasualtie = randomSaxon.receiveDamage(randomViking.strength)
  
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1)
      
    }
  return saxonCasualtie
}

War.prototype.saxonAttack = function () {
  let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
  let randomViking = this.vikingArmy[vikingIndex]
  let randomSaxon = this.saxonArmy[saxonIndex]

  let vikingCasualtie = randomViking.receiveDamage(randomSaxon.strength)

  if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomViking, 1)
  }

  return vikingCasualtie  
}
War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
} 
