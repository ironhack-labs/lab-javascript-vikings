function Soldier(healthBar, strengthPoint) {
  this.health = healthBar;
  this.strength = strengthPoint;
}
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damageCount) {
  this.health -= damageCount;
};

// Viking
function Viking(nameArg, healthBar, strengthPoint) {
  Soldier.call(this, healthBar, strengthPoint);
  this.name = nameArg;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damageCount) {
  this.health -= damageCount;
  if (this.health > 0) {
    return this.name + " has received " + damageCount + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(healthBar, strengthPoint) {
  Soldier.call(this, healthBar, strengthPoint);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function(damageCount) {
  this.health -= damageCount;
  if (this.health > 0) {
    return "A Saxon has received " + damageCount + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  War.prototype.addViking = function(vikingCannonMeat) {
    this.vikingArmy.push(vikingCannonMeat);
  };
  War.prototype.addSaxon = function(saxonCannonMeat) {
    this.saxonArmy.push(saxonCannonMeat);
  };
  War.prototype.vikingAttack = function() {
    var saxonRound;
    var vikingRound;
    var resultadoSaxon;
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      saxonRound = Math.floor(Math.random() * this.saxonArmy.length);
      vikingRound = Math.floor(Math.random() * this.vikingArmy.length);
      resultadoSaxon = this.saxonArmy[saxonRound].receiveDamage(
        this.vikingArmy[vikingRound].strength
      );
      if (this.saxonArmy[saxonRound].health <= 0) {
        this.saxonArmy.splice(saxonRound, 1);
      }
    }
    return resultadoSaxon;
  };

  War.prototype.saxonAttack = function() {
    var saxonRound;
    var vikingRound;
    var resultadoViking;
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      saxonRound = Math.floor(Math.random() * this.saxonArmy.length);
      vikingRound = Math.floor(Math.random() * this.vikingArmy.length);
      resultadoViking = this.vikingArmy[vikingRound].receiveDamage(
        this.saxonArmy[saxonRound].strength
      );
      if (this.vikingArmy[vikingRound].health <= 0) {
        this.vikingArmy.splice(vikingRound, 1);
      }
    }
    return resultadoViking;
  };

  War.prototype.showStatus = function() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  };
}