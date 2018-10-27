// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.receiveDamage = function(damage) {
 this.health -= damage;
};
Soldier.prototype.attack = function() {
  return this.strength;
};

// Viking
function Viking(name, healthVik, strengthVik) {
this.name = name;
Soldier.call(this, healthVik, strengthVik)
this.battleCry = function() {
  return "Odin Owns You All!";
}
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage
  if (this.health === 0) {
    return this.name + " has died in act of combat";
  } else {
    return this.name + " has received " + damage + " points of damage";
  }
}

// Saxon
function Saxon(healthSax, strengthSax) {
  Soldier.call(this, healthSax, strengthSax)
  
}

 Saxon.prototype = Object.create(Soldier.prototype);
 Saxon.prototype.constructor = Saxon;
 Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health === 0) {
    return "A Saxon has died in combat";
  } else {
    return "A Saxon has received " + damage  + " points of damage";
  }

  this.health -= damage;
 };

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon)
};

War.prototype.vikingAttack = function() {
 var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length - 1) + 1];
 var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length - 1) + 1];

 if (randomSaxon.health <= randomViking.strength) {
   var indexSax = this.saxonArmy.indexOf(randomSaxon);
   this.saxonArmy.splice(indexSax, 1);
 }

 return randomSaxon.receiveDamage(randomViking.strength);
};

War.prototype.saxonAttack = function() {
  var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length - 1) + 1];
  var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length - 1) + 1];

  if (randomViking.health <= randomSaxon.strength) {
    var indexVik = this.vikingArmy.indexOf(randomViking);
    this.vikingArmy.splice(indexVik, 1);
  }

  return randomViking.receiveDamage(randomSaxon.strength);
};

War.prototype.showStatus = function() {
if (this.saxonArmy.length === 0) {
  return "Vikings have won the war of the century!";
} else if (this.vikingArmy.length === 0){
  return "Saxons have fought for their lives and survive another day...";
} else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
  return "Vikings and Saxons are still in the thick of battle.";
}
};