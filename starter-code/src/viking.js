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


let vikingArmy = [];
// War
function War() {
  // this.saxonArmy = function saxonArmy() []
  this.addViking = function addViking(viking) {
    
  }
  this.addSaxon = function addSaxon(saxon) {

  }
  this.vikingAttack = function vikingAttack() {

  }
  this.saxonAttack = function saxonAttack() {

  }
  this.showStatus = function showStatus() {
    
  }
}
