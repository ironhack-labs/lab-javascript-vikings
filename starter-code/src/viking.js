
// -----------------------------------
// Soldier
// -----------------------------------
function Soldier(healthArg, strengthArg) { 
  this.health = healthArg;
  this.strength = strengthArg;
}


Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}
// -----------------------------------
// Viking
// -----------------------------------
function Viking(nameArg, healthArg, strengthArg) {
 Soldier.call(this, healthArg, strengthArg);
 this.name = nameArg;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon() {}

// War
function War() {}
