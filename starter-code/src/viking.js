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
  var saxonSoldier = parseInt(Math.random()*this.saxonArmy.length); 
  var vikingSoldier = parseInt(Math.random()*this.vikingArmy.length); 
  var receiveDamageReturn = this.saxonArmy[saxonSoldier].receiveDamage(this.vikingArmy[vikingSoldier].strength);
  // var healthReturn= this.saxonArmy[saxonSoldier].health;
  if (this.saxonArmy[saxonSoldier].health<=0) {
    this.saxonArmy.splice(saxonSoldier);
  }  
  return receiveDamageReturn;
}
War.prototype.saxonAttack = function() {
  var saxonSoldier = parseInt(Math.random()*this.saxonArmy.length); 
  var vikingSoldier = parseInt(Math.random()*this.vikingArmy.length); 
  var receiveDamageReturn = this.vikingArmy[vikingSoldier].receiveDamage(this.saxonArmy[saxonSoldier].strength);
  if (this.vikingArmy[vikingSoldier].health<=0) {
    this.vikingArmy.splice(vikingSoldier);
  }  
  return receiveDamageReturn;

}
War.prototype.showStatus = function() {
  if (this.saxonArmy.length==0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length==0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }

//   if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
}


