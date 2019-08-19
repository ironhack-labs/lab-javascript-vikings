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

// Vikin
function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name
  this.receiveDamage = function (damage) {
    this.health -= damage
    if (this.health > 0)
      return (this.name + ' has received ' + damage + ' points of damage')
    else
      return (this.name + ' has died in act of combat')
  }
  this.battleCry = function () {
    return 'Odin Owns You All!'
  }
}
Viking.prototype = Object.create(Soldier.prototype)
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
  this.receiveDamage = function (damage) {
    this.health -= damage
    if (this.health > 0)
      return ('A Saxon has received ' + damage + ' points of damage')
    else
      return 'A Saxon has died in combat'
  }

}
Saxon.prototype = Object.create(Soldier.prototype)

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []
  this.addViking = function (Viking) {
    this.vikingArmy.push(Viking)
  }
  this.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon)
  }
  this.vikingAttack = function () {
    let attacker = this.vikingArmy[0]
    let victim = this.saxonArmy[0]

    return victim.receiveDamage(attacker.strength)

    if (victim.health < 0)
      saxonArmy.shift()
  }
  this.saxonAttack = function () {
    let attacker = this.saxonArmy[0]
    let victim = this.vikingArmy[0]

    return victim.receiveDamage(attacker.strength)

    if (victim.health < 0)
      vikingArmy.shift()
  }

  this.showStatus = function () {

    if (saxonArmy.length === 0)
      return 'Vikings have won the war of the century!'
    else
    if (vikingArmy.length === 0)
      return 'Saxons have fought for their lives and survive another day...'
    else
      return 'Vikings and Saxons sre still in the thick of a battle.'
  }
}