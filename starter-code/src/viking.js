// Soldier
function Soldier(health, strength) {
  this.health=health;
  this.strength=strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}
Soldier.prototype.receiveDamage= function(dmg) {
  this.health = this.health - dmg;
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength)
  
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(dmg) {
  this.health = this.health - dmg;
  if (this.health>0) {
    return this.name+" has received "+ dmg +" points of damage";
  } else {
    return this.name+" has died in act of combat";
  }
}
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) { 
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function (dmg) {
  this.health = this.health - dmg;
  if (this.health>0) {
    return "A Saxon has received "+ dmg +" points of damage";
  } else {
    return "A Saxon has died in combat";
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);

}
War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}
War.prototype.vikingAttack = function() {
  var saxonSoldier = paresInt(Math.random*this.saxonArmy.length); 
  var vikingSoldier = paresInt(Math.random*this.vikingArmyArmy.length); 
  this.saxonArmy[saxonSoldier]
  .receiveDamage(vikingArmy[vikingSoldier].strength);
  if (this.saxonArmy[saxonSoldier].health<=0) {
    this.saxonArmy.splice(saxonSoldier);
    
  }  
  return this.saxonArmy[saxonSoldier]
  .receiveDamage(vikingArmy[vikingSoldier].strength);
}
War.prototype.saxonAttack = function() {}
War.prototype.showStatus = function() {}
