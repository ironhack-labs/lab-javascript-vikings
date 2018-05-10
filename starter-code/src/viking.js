// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  return this.health > 0 ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
};

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  return this.health > 0 ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
};


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.getRandomViking = function() {
  return this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
};

War.prototype.getRandomSaxon = function() {
  return this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
};

War.prototype.removeViking = function(viking) {
  this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
};

War.prototype.removeSaxon = function(saxon) {
  this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
};

War.prototype.vikingAttack = function() {
  var randomViking = this.getRandomViking();
  var randomSaxon = this.getRandomSaxon();
  var result = randomSaxon.receiveDamage(randomViking.strength);  
  if (randomSaxon.health <= 0) {
     this.removeSaxon(randomSaxon);
  } 
  return result;
};

War.prototype.saxonAttack = function() {
  var randomViking = this.getRandomViking();
  var randomSaxon = this.getRandomSaxon();
  var result = randomViking.receiveDamage(randomSaxon.strength);  
  if (randomViking.health <= 0) {
     this.removeViking(randomViking);
  } 
  return result;
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
  if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day...";
  return "Vikings and Saxons are still in the thick of battle."
}


var war = new War();
var viking = new Viking('Rulo', 100, 50);
var saxon = new Saxon(70, 30);

war.addViking(viking);
war.addSaxon(saxon);
war.vikingAttack();
war.showStatus();

// showStatus()
