// Soldier
function Soldier(healthArg, strengthArg) {
  this.healthArg = healthArg;
  this.strengthArg = strengthArg;
}

Soldier.prototype.attack = function() {
  return strengthArg;
}

Soldier.prototype.receiveDamage = function(damage) {

}

// Viking
function Viking(healthArg, strengthArg, name) {
  this.healthArg = healthArg;
  this.strengthArg = strengthArg;
  this.name = name;
}

Viking.prototype.attack = function() {
  return strengthArg;
}

Viking.prototype.receiveDamage = function() {
  if (healthArg !== 0) {
    console.log(name + " has received " + damage + " points of damage")
  } else {
    console.log(name + " has died in act of combat")
  }
}

Viking.prototype.battlecry = function() {
  console.log("Odin Owns You All!");
}

// Saxon
function Saxon(healthArg, strengthArg) {
  this.healthArg = healthArg;
  this.strengthArg = strengthArg;
}

Saxon.prototype.attack = function() {
  return strengthArg;
}

Saxon.prototype.receiveDamage = function(damage) {
  
}

// War
function War() {}
