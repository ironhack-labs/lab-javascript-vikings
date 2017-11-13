// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

Viking.prototype = Object.create(Soldier.prototype);

// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype.attack = function() {
  return this.strength;
};

Viking.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};
// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
  Soldier.call(this, health, strength); {
    Soldier.prototype.receiveDamage = function(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return "A Saxon has received" + damage + "points of damage";
      } else {
        return "A Saxon has died in combat";
      }
    };
  }
}

// War

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length -1)];
};

function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
