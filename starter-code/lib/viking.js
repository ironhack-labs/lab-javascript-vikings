// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
// function Soldier() {}
//
// //------------------------------------------------------
// // GENERAL
// //------------------------------------------------------
// function General() {}
//
// //------------------------------------------------------
// // FOOTVIKING
// //------------------------------------------------------
// function FootViking() {}
//
// module.exports = {
//   Soldier:    Soldier,
//   General:    General,
//   FootViking: FootViking
// };

function Soldier (health, strength) {
  this.health = health
  this.strength = strength
}

Soldier.prototype.attack = function() {
  return this.strength
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage
  if (this.health > 0) {
    return this.name + ' has received ' + damage + ' points of damage'
  } else {
    return this.name + ' has died in act of combat'
  }
}

function Viking (name, health, strength) {
  this.name = name
  Soldier.call(this, health, strength)
}

Viking.prototype = Object.create(Soldier.prototype)

Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!'
}

function Saxon (health, strength) {
  Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype)

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage
  if (this.health > 0) {
    return 'A Saxon has received ' + damage + ' points of damage'
  } else {
    return 'A Saxon has died in combat'
  }
}

function War () {
  this.vikingsArmy = []
  this.saxonsArmy = []
}

War.prototype.addViking = function(viking) {
  return this.vikingsArmy.push(viking)
}

War.prototype.addSaxon = function(saxon) {
  return this.saxonsArmy.push(saxon)
}

War.prototype.saxonAttack = function() {
  return this.vikingsArmy[0].receiveDamage(this.saxonsArmy[0].attack())
}

War.prototype.vikingAttack = function() {
  return this.saxonsArmy[0].receiveDamage(this.vikingsArmy[0].attack())
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
