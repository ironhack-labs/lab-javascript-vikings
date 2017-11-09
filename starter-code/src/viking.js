// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
  };
}

Soldier.prototype.attack = function() {
  return this.strength;
};

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0){
      return name + " has received " + damage + " points of damage";
    } else {
      return name + " has died in act of combat";
    }
  };
}

Vikig.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
  var aSaxon = Math.floor(Math.random()*(this.saxonArmy.length));
  var aViking = Math.floor(Math.random()*(this.vikingArmy.length));
  var result = this.saxonArmy[aSaxon].receiveDamage(this.vikingArmy[aViking].attack());
  if (this.saxonArmy[aSaxon].health <= 0) {
    this.saxonArmy.splice(aSaxon,1);
  }
  return result;
};

War.prototype.saxonAttack = function() {
  var aSaxon = Math.floor(Math.random()*(this.saxonArmy.length));
  var aViking = Math.floor(Math.random()*(this.vikingArmy.length));
  var result = this.vikingArmy[aViking].receiveDamage(this.saxonArmy[aSaxon].attack());
  if (this.vikingArmy[aViking].health <= 0) {
    this.vikingArmy.splice(aViking,1);
  }
  return result;
};

War.prototype.showStatus = function() {
  if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
