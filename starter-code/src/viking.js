// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = health - damage;
  };
}

// Viking
// Nécessaire pour lier Viking à Soldier :
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
  this.name = name;
  // Inutile de rappeler "attack" depuis Soldier, car c'est automatique...
  // donc FAUX : Soldier.call(this, health, strength, attack);
  // Par contre, nécessaire de rappeler "health" et "strength" qui caractérisent Viking et non Soldier
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    // nécessaire de donner une valeur à "health" car celle de "Soldier" a été écrasée !
    this.health = health - damage;
    if (this.health > 0) {
      return name + " has received " + damage + " points of damage";
    } else {
      return name + " has died in act of combat";
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health = health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(Viking) {
    vikingArmy.push(Viking);
  };
  this.addSaxon = function(Saxon) {
    saxonArmy.push(Saxon);
  };
  this.vikingAttack = function() {};
  this.saxonAttack = function() {};
  this.showStatus = function() {};
}
