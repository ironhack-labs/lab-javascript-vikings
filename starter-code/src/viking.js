// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    return (this.health > 0) ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
  }

  Viking.prototype.battleCry = function() {
    return ("Odin Owns You All!");
  }





// Saxon
function Saxon() {}

// War
function War() {}