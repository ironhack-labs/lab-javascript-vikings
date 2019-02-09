// Soldier
function Soldier(healthArg, strengthArg) {

  this.health = healthArg

  this.strength = strengthArg

}

Soldier.prototype.attack = function () {

  return this.strength

}

Soldier.prototype.receiveDamage = function (damage) {

  this.health -= damage

}


// Viking
function Viking(nameArg, healthArg, strengthArg) {

  Soldier.call(this, healthArg, strengthArg)

  this.name = nameArg

}

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking


Viking.prototype.receiveDamage = function (damage) {

  this.health -= damage

  if(this.health > 0){

    return this.name + " has received " + damage + " points of damage"

  } else {

    return this.name + " has died in act of combat"

  }

}


Viking.prototype.battleCry = function () {

  return "Odin Owns You All!"

}


// Saxon
function Saxon(healthArg, strengthArg) {

Soldier.call(this, healthArg, strengthArg)

}

Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon


Saxon.prototype.receiveDamage = function(damage) {

  this.health -= damage

  if(this.health > 0){

    return "A Saxon has received " + damage + " points of damage"

  } else {

    return "A Saxon has died in combat"

  }

}




// War
function War() {

  this.vikingArmy = []

  this.saxonArmy = []

}

War.prototype.addViking = function (viking) {

  this.vikingArmy.push(viking)

}


War.prototype.addSaxon = function (saxon) {

  this.saxonArmy.push(saxon)

}


War.prototype.vikingAttack = function () {

  var randomSaxon = [Math.floor(Math.random * saxonArmy.length)]

  var randomViking = vikingArmy[Math.floor(Math.random * vikingArmy.length)]

  var saxon = saxonArmy[randomSaxon]

  var viking = vikingArmy[randomViking]

 var newHealth = saxon.receiveDamage(viking.strength)

  if(saxon.receiveDamage.includes("died")) {

    this.SaxonArmy.slice(randomSaxon, 1)

  }

  return newHealth
}

console.log(War.vikingAttack)