// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health > 0) return this.name + " has received " + damage + " points of damage";
  return this.name + " has died in act of combat";
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0) return "A Saxon has received " + damage + " points of damage";
  return "A Saxon has died in combat";
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy  = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
  randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

  var result = randomSaxon.receiveDamage(randomViking.strength);
  if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxon);

  return result;
};

War.prototype.saxonAttack = function() {
  randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

  var result = randomViking.receiveDamage(randomSaxon.strength);
  if (randomViking.health <= 0) this.vikingArmy.splice(randomViking);

  return result;

};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  }
  if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  if (this.saxonArmy.length == 1 && this.vikingArmy.length == 1) {
  return "Vikings and Saxons are still in the thick of battle.";
  }
};