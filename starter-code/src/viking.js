// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health>0) {
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    return this.name + " has died in act of combat";
  };
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health>0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  else {
    return "A Saxon has died in combat";
  };
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
};

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
  
  var attackedSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var attackedSaxon = this.saxonArmy[attackedSaxonIndex];
   
  var attackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  
  var vikingStrength = attackingViking.strength;

   var receiveDamageString = attackedSaxon.receiveDamage(vikingStrength);
   
  if (receiveDamageString === "A Saxon has died in combat") {
      this.saxonArmy.splice(attackedSaxonIndex, 1);
  }
   return receiveDamageString;
};

War.prototype.saxonAttack = function() {
  
  var attackedVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var attackedViking = this.vikingArmy[attackedVikingIndex];
   
  var attackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  
  var saxonStrength = attackingSaxon.strength;
  
  var receiveDamageString = attackedViking.receiveDamage(saxonStrength);
   
  if (receiveDamageString === attackedViking.name + " has died in act of combat") {
      this.vikingArmy.splice(attackedVikingIndex, 1);
  }
   
   return receiveDamageString;
};

War.prototype.showStatus = function() {
  
   if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
  } else {
      return "Vikings and Saxons are still in the thick of battle.";
  }
};

