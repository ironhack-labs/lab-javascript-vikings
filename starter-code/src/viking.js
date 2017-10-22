// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(attack) {
  this.health -= attack;
};


// Viking

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.constructor = Viking;

function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype.attack = function() {
  return this.strength;
};

Viking.prototype.receiveDamage = function(attack) {
  this.health -= attack;

  if(this.health > 0) {
    return (this.name + " has received " + attack + " points of damage");
    } else {
      return (this.name + " has died in act of combat");
    }
};

Viking.prototype.battleCry = function() {
  return ("Odin Owns You All!");
};

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype.receiveDamage = function(attack) {
  this.health -= attack;

  if(this.health > 0) {
    return ("A Saxon has received " + attack + " points of damage");
    } else {
      return ("A Saxon has died in combat");
    }
};


// War
function War () {
 this.vikingArmy = [];
 this.saxonArmy = [];
}

War.prototype.addViking = function(newViking) {
  this.vikingArmy.push(newViking);
};

War.prototype.addSaxon = function(newSaxon) {
  this.saxonArmy.push(newSaxon);
};

War.prototype.vikingAttack = function() {
  var vikingRamdon = Math.floor(Math.random()* this.vikingArmy.length);
  var saxonRamdon = Math.floor(Math.random()* this.saxonArmy.length);

  var vikingWar = this.vikingArmy[vikingRamdon];
  var saxonWar = this.saxonArmy[saxonRamdon];

  var result = saxonWar.receiveDamage(vikingWar.attack());

  if(saxonWar.health <= 0) {
    this.saxonArmy.splice(saxonRamdon, 1);
  }

  return result;
};

War.prototype.saxonAttack = function() {
  var vikingRamdon = Math.floor(Math.random()* this.vikingArmy.length);
  var saxonRamdon = Math.floor(Math.random()* this.saxonArmy.length);

  var vikingWar = this.vikingArmy[vikingRamdon];
  var saxonWar = this.saxonArmy[saxonRamdon];

  var result = saxonWar.receiveDamage(vikingWar.attack());

  if(vikingWar.health <= 0) {
    this.vikingWar.splice(vikingRamdon, 1);
  }

  return result;
};

War.prototype.showStatus = function() {

  if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
    return "Vikings and Saxons are still in the thick of battle.";
  } else if(this.vikingArmy.length == 0) {
    return "Vikings and Saxons are still in the thick of battle."
  } else {
    return "Vikings have won the war of the century!";
  }
};
