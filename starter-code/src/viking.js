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

  var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

  var randomViking = Math.floor(Math.random() * this.vikingArmy.length)

  var saxon = this.saxonArmy[randomSaxon]

  var viking = this.vikingArmy[randomViking]

  var newHealth = saxon.receiveDamage(viking.strength)

  if(newHealth.includes("died")) {

    this.saxonArmy.splice(randomSaxon, 1)

  }

  return newHealth

}




War.prototype.saxonAttack = function () {

  var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

  var randomViking = Math.floor(Math.random() * this.vikingArmy.length)

  var saxon = this.saxonArmy[randomSaxon]

  var viking = this.vikingArmy[randomViking]

  var newHealth = viking.receiveDamage(saxon.strength)

  if(newHealth.includes("died")) {

    this.vikingArmy.splice(randomViking, 1)

  }

  return newHealth

}




War.prototype.showStatus = function () {

  if(this.saxonArmy.length === 0) {

    return "Vikings have won the war of the century!"

  } else if (this.vikingArmy.length === 0) {

    return "Saxons have fought for their lives and survive another day..."

  } else if((this.saxonArmy.length >= 1) && (this.vikingArmy.length >= 1)) {

    return "Vikings and Saxons are still in the thick of battle."

  }

}



var viking1 = new Viking ("Ragnar", 300, 150)
var viking2 = new Viking ("BJorn", 60, 70)
var viking3 = new Viking ("Lagartha", 80, 200)
var viking4 = new Viking ("Torvi", 100, 150)
var saxon1 = new Saxon ("Martha", 50, 60)
var saxon2 = new Saxon ("Hedge", 1000, 300)
var saxon3 = new Saxon ("Bert", 90, 100)

