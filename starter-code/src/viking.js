// Soldier
function Soldier (health, strength) {
  this.health = health
  this.strength = strength
}

Soldier.prototype.attack = function () {
  return this.strength
}

Soldier.prototype.receiveDamage = function (damage) {
  var total = this.health -= damage
  return

}

// Viking
function Viking (name, health, strength) {
  this.name = name
  this.health = health
  this.strength = strength
}

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

Viking.prototype.receiveDamage = function (damage) {
  var total = this.health -= damage
  if(total <= 0) {
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
function War () {}
