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
};

// Viking
function Viking(name, health, strength) {
  Soldier.call();

  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage"; 
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
  Soldier.call();

  this.health = health;
  this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return 'A Saxon has received ' + damage + ' points of damage';
  } else {
    return 'A Saxon has died in combat'
  }
}

// War!
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};


// Viking Attack
War.prototype.vikingAttack = function() {
    var randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    var randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = this.saxonArmy[randomSaxonIndex];
    var randomViking = this.vikingArmy[randomVikingIndex];
    // subtract the damage value from the Saxon's 
    var result = randomSaxon.receiveDamage(randomViking.strength);
    if (result === 'A Saxon has died in combat') { 
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
};

// Saxon Attack
War.prototype.saxonAttack = function() {
  var randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var randomSaxon = this.saxonArmy[randomSaxonIndex];
  var randomViking = this.vikingArmy[randomVikingIndex];
  var result = randomViking.receiveDamage(randomSaxon.strength);
  if (result === randomViking.name + ' has died in act of combat') {
    this.vikingArmy.splice(randomVikingIndex, 1);
  }
  return result;
};


War.prototype.showStatus = function() {
  var vikingsWin = 'Vikings have won the war of the century!';
  var saxonsWin = 'Saxons have fought for their lives and survive another day...';
  var stillFighting = 'Vikings and Saxons are still in the thick of battle.';
  if (this.saxonArmy.length === 0) {
    return vikingsWin;
  } else if (this.vikingArmy.length === 0) {
    return saxonsWin;
  } else {
    return stillFighting;
  }
};

