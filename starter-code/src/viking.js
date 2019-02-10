// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg //health: healthArg
  this.strength = strengthArg //strength: strengthArg
}
  Soldier.prototype.attack = function () {
 return this.strength
}
  Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage
  
}


// Viking
 function Viking(nameArg, healthArg, strengthArg) {
   this.name = nameArg
   this.health = healthArg
   this.strength = strengthArg


 }
  Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;

  Viking.prototype.receiveDamage = function (damage){
    this.health -= damage
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!"
}

// if (Viking.health - Viking.prototype.receiveDamage) {
//   return this.name + " has received  " + this.health +  " points of damage"
// } else {
//   return this.name + " has died in act of combat"
// }








// Saxon
function Saxon(healthArg, strengthArg) {
  this.health = healthArg
  this.strength = strengthArg

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage
  
}







// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []



}



War.prototype = Object.create(Soldier.prototype);
War.prototype.constructor = War;

War.prototype.addViking = function (arg){
 
}
War.prototype.addSaxon = function(arg){
saxon.add(arg) 
}
War.prototype.vikingAttack = function (){}
War.prototype.saxonAttack = function (){}
War.prototype.showStatus = function (){}

