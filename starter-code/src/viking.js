// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(theDamageArg){
  this.health -= theDamageArg;
  return;
}

// Viking
function Viking(nameArg, health, strength) {
  Soldier.call(this, health, strength);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(theDamageArg){
  Soldier.prototype.receiveDamage.call(this, theDamageArg);
  if (this.health > 0){
    return this.name + " has received " + theDamageArg + " points of damage";
  } else{
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(theDamageArg){
  Soldier.prototype.receiveDamage.call(this, theDamageArg);
  if (this.health > 0){
    return "A Saxon has received " + theDamageArg + " points of damage";
  } else{
    return "A Saxon has died in combat";
  }

}
// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype = Object.create(Soldier.prototype);
War.prototype.constructor = War;

War.prototype.addViking = function(vikingObj){
  this.vikingArmy.push(vikingObj);
}

War.prototype.addSaxon = function(saxonObj){
  this.saxonArmy.push(saxonObj);
}

War.prototype.vikingAttack = function(){
var outcome = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
  if (this.saxonArmy[0].health <= 0){
    this.saxonArmy.shift();
  }
  return outcome;
}

War.prototype.saxonAttack = function(){
  outcome = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
  if (this.vikingArmy[0].health <= 0){
    this.vikingArmy.shift();
  }
  return outcome;
}

War.prototype.showStatus = function(){
  if (this.saxonArmy.length <= 0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length <= 0){
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
    return "Vikings and Saxons are still in the thick of battle.";
  }
}