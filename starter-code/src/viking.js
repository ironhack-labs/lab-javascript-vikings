// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
};
// Viking
function Viking(name, health, strength) {
  this.name = name;
  // this.health = health;
  // this.strength = strength;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  return (this.health>0) ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
};
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  return (this.health>0) ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
};
// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function(viking) {
  if (viking instanceof Viking) {
    this.vikingArmy.push(viking);
  }
};
War.prototype.addSaxon = function(saxon) {
  if (saxon instanceof Saxon) {
    this.saxonArmy.push(saxon);
  }
};
War.prototype.vikingAttack = function() {
  saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
  vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
  this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength);
  if (this.saxonArmy[saxonRandom].health <= 0) {
    this.saxonArmy.splice(saxonRandom, 1);
    return "A Saxon has died in combat";
  }
};
War.prototype.saxonAttack = function() {
  vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
  saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
  this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength);
  if (this.vikingArmy[vikingRandom].health <= 0) {
    this.vikingArmy.splice(vikingRandom, 1);
    return "A Viking has died in combat";
  }else{
    return this.vikingArmy[vikingRandom].name + " has received " + this.saxonArmy[saxonRandom].strength + " points of damage";
  }
};
War.prototype.showStatus = function () {
  if(this.saxonArmy.length<=0){
    return "Vikings have won the war of the century!";
  }else if(this.vikingArmy.length<=0){
    return "Saxons have fought for their lives and survive another day...";
  }else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
