// Soldier

function Soldier(health, strength) {

  this.health = health;
  this.strength = strength;

  this.attack = function () {
    return this.strength
  }
  this.receiveDamage = function (damage) {

    this.health = this.health - damage  

  }

}

// Viking

function Viking(name, health, strength) {
 
  Soldier.call(this,name,health,strength)
  
  this.name = name
  this.health = health
  this.strength = strength
}
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking


//this.battleCry = function () {

 // return "Odin Owns You All!"
//}







// Saxon

function Saxon(health, strength) {

  this.health = health
  this.strength = strength
}

// War
function War() { }
