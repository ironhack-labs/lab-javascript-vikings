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
function Viking () {}

// Saxon
function Saxon () {}

// War
function War () {}
