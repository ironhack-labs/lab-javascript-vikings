// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  this.name = name;

  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
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
  var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var indexViking = Math.floor(Math.random() * this.vikingArmy.length);

  var attackResult = this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].attack());
  
  if (this.saxonArmy[indexSaxon].health <= 0) {
    this.saxonArmy.splice(indexSaxon, 1); 
  }

  return attackResult;
}

War.prototype.saxonAttack = function() {
  var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var indexViking = Math.floor(Math.random() * this.vikingArmy.length);

  var attackResult = this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].attack());

  if (this.vikingArmy[indexViking].health <= 0) {
    this.vikingArmy.splice(indexViking, 1); 
  }

  return attackResult;
}

War.prototype.showStatus = function() {
  switch (true) {
    case (this.saxonArmy.length > 0 && this.vikingArmy.length > 0):
      return "Vikings and Saxons are still in the thick of battle.";
      break;

    case (this.saxonArmy.length > 0):
      return "Saxons have fought for their lives and survive another day...";
      break;

    case (this.vikingArmy.length > 0):
      return "Vikings have won the war of the century!";
      break;
  }
}

