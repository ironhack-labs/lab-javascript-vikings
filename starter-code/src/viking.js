// Soldier
function Soldier(health, strength) {
  this.health = 300;
  this.strength = 150;
};

Soldier.prototype.attack = function() {
   return this.strength;
 }

 Soldier.prototype.receiveDamage = function (damage) {
   this.health -= damage;
 } 


// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = "Harald";
};

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!"
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.health = 60;
  this.strength = 25;  
};

Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);  
}

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};


/*
var randomSaxon = Math.floor(Math.random() * War.saxonArmy.length);
var randomViking = Math.floor(Math.random() * War.vikingArmy.length);
*/


War.prototype.vikingAttack = function() {
  Saxon.receiveDamage = Viking.strength;
  if (Saxon.health === 0) {
  this.saxonArmy -= 1;
  };
  return Saxon.receiveDamage;
};


War.prototype.saxonAttack = function() {
  Viking.receiveDamage = Saxon.strength;
  if (Viking.health === 0) {
  vikingArmy -= 1;
  };
  return Viking.receiveDamage;
};


War.prototype.showStatus = function() {
  if (this.saxonArmy.length == 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else 
    return "Vikings and Saxons are still in the thick of battle.";
};

