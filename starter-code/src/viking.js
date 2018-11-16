// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = function attack() {
    return this.strength
  }
  this.receiveDamage = function receiveDamage(theDamage) {
    this.health = health - 50
  }
}

Viking.prototype = Object.create(Soldier.prototype);

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name
  //is attack inherited even if it's not as an argument?
  this.receiveDamage = function (theDamage) {
    this.health = health - theDamage
    if(this.health > 0) {
      return (name + " has received " + theDamage + " points of damage")
    } else {
      return `${name} has died in act of combat`
    }
  }
  this.battleCry = function battleCry(){
    return "Odin Owns You All!"
  }
}

Saxon.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
  this.receiveDamage = function receiveDamage(theDamage){
    this.health = health - theDamage
    if(this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  // this.addViking = function addViking(viking) {
  //   this.vikingArmy.push(viking);
  // } THIS IS GOOD BUT PROTOTYPE IS A BETTER CODE BECAUSE 
  // IT INHERITS ANY CHANGE FROM THE CONSTRUCTION:

  War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking);
  }

  // this.addSaxon = function addSaxon(saxon) {
  //   this.saxonArmy.push(saxon);
  // } THIS IS GOOD BUT THE BETTER CODE IS WITH PROTOTYPE:

  War.prototype.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  }

  this.vikingAttack = function vikingAttack() {

  }
  this.saxonAttack = function saxonAttack() {

  }
  this.showStatus = function showStatus() {

  }
}
