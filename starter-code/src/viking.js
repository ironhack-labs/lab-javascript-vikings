// Soldier
function Soldier (health, strength) {
  this.health = health
  this.strength = strength
}

Soldier.prototype.attack = function () {
  return this.strength
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage
}

// Viking

function Viking (name, health, strength) {
  this.name = name
  Soldier.call(this, health, strength)
}

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage
  if (this.health <= 0) {
    if (this.name === 'A Saxon') {
      return 'A Saxon has died in combat'
    } else {
      return this.name + ' has died in act of combat'
    }
  } else {
    return this.name + ' has received ' + damage + ' points of damage'
  }
}
Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!'
}

// Saxon
function Saxon (health, strength) {
  var name = 'A Saxon'
  Viking.call(this, name, health, strength)
}

Saxon.prototype = Object.create(Viking.prototype)
Saxon.prototype.constructor = Saxon

// War
function War () {
  this.vikingArmy = []
  this.saxonArmy = []
}

War.prototype = Object.create(Saxon.prototype)
War.prototype.constructor = War

War.prototype.addViking = function (a) {
  this.vikingArmy.push(a)
}

War.prototype.addSaxon = function (a) {
  this.saxonArmy.push(a)
}

function randomSoldier(a){
  return parseInt(Math.random() * a.length)
}

War.prototype.vikingAttack = function () {
  var sRandomSaxon = randomSoldier(this.saxonArmy)
  var vRandomViking = randomSoldier(this.vikingArmy)
  this.saxonArmy[sRandomSaxon].health -= this.vikingArmy[vRandomViking].strength

  if(this.saxonArmy[sRandomSaxon].health <= 0) {
    this.saxonArmy.splice(0,1)
  }
  return "A Saxon has died in combat"
}

War.prototype.saxonAttack = function () {
  var sRandomSaxon = randomSoldier(this.saxonArmy)
  var vRandomViking = randomSoldier(this.vikingArmy)
  this.vikingArmy[vRandomViking].health -= this.saxonArmy[sRandomSaxon].strength
  var result = this.vikingArmy[vRandomViking].name + " has received " + this.saxonArmy[sRandomSaxon].strength + " points of damage"
  if(this.vikingArmy[vRandomViking].health <= 0) {
    this.vikingArmy.splice(0,1)
  }
  return result
}

War.prototype.showStatus = function () {
  if(this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}
