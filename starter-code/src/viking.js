// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damageArg) {
  this.health -= damageArg;
};

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damageArg) {
  this.health -= damageArg;
  if (this.health > 0) {
    return this.name + " has received " + damageArg + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function(damageArg) {
  this.health -= damageArg;
  if (this.health > 0) {
    return "A Saxon has received " + damageArg + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  War.prototype.addViking = function(vikingRecruited) {
    this.vikingArmy.push(vikingRecruited);
  };
  War.prototype.addSaxon = function(saxonRecruited) {
    this.saxonArmy.push(saxonRecruited);
  };
  War.prototype.vikingAttack = function() {
    var saxonRnd;
    var vikingRnd;
    var resultadoSaxon;
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      saxonRnd = Math.floor(Math.random() * this.saxonArmy.length);
      vikingRnd = Math.floor(Math.random() * this.vikingArmy.length);
      resultadoSaxon = this.saxonArmy[saxonRnd].receiveDamage(
        this.vikingArmy[vikingRnd].strength
      );
      if (this.saxonArmy[saxonRnd].health <= 0) {
        this.saxonArmy.splice(saxonRnd, 1);
      }
    }
    return resultadoSaxon;
  };

  War.prototype.saxonAttack = function() {
    var saxonRnd;
    var vikingRnd;
    var resultadoViking;
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      saxonRnd = Math.floor(Math.random() * this.saxonArmy.length);
      vikingRnd = Math.floor(Math.random() * this.vikingArmy.length);
      resultadoViking = this.vikingArmy[vikingRnd].receiveDamage(
        this.saxonArmy[saxonRnd].strength
      );
      if (this.vikingArmy[vikingRnd].health <= 0) {
        this.vikingArmy.splice(vikingRnd, 1);
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
