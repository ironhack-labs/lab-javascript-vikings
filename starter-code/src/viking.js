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

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health <= 0) {return this.name + " has died in act of combat"}
  return this.name + " has received " + damage + " points of damage"; 
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health <= 0) {return "A Saxon has died in combat"}
  return "A Saxon has received " + damage + " points of damage"; 
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.vikingAttack = function() {
    randomindexViking = Math.floor(Math.random()*this.vikingArmy.length);
    randomindexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    randomViking = this.vikingArmy[randomindexViking];
    randomSaxon = this.saxonArmy[randomindexSaxon];
  if (this.saxonArmy[randomindexSaxon].health <= randomViking.strength) {
     this.saxonArmy.splice(this.saxonArmy[randomindexSaxon],1);
     return randomSaxon.receiveDamage(randomViking.strength)}
     else {
     return randomSaxon.receiveDamage(randomViking.strength)}
  }

  this.saxonAttack = function() {
     randomindexViking = Math.floor(Math.random()*this.vikingArmy.length);
    randomindexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    randomViking = this.vikingArmy[randomindexViking];
    randomSaxon = this.saxonArmy[randomindexSaxon];
    if (this.vikingArmy[randomindexViking].health <= randomSaxon.strength) {
      this.vikingArmy.splice(this.vikingArmy[randomindexViking],1);
      return randomViking.receiveDamage(randomSaxon.strength)}
      else {
      return randomViking.receiveDamage(randomSaxon.strength)}
}
  this.showStatus = function() {
    if (this.saxonArmy.length === 0) {return "Vikings have won the war of the century!"}
    else if (this.vikingArmy.length === 0) {return "Saxons have fought for their lives and survive another day..."}
    else {return "Vikings and Saxons are still in the thick of battle."}
  }
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}



