// Soldier
function Soldier (health, strength) {
  this.health = health ;
  this.strength = strength;
}

  Soldier.prototype.attack = function() {
    return this.strength;
  };

  Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
  };

// Viking

function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  var result = this.name + " has died in act of combat";
  if (this.health > 0) {
    result = this.name + " has received " + damage + " points of damage";
  }
  return result;
};

Viking.prototype.battleCry = function battleCry () {
  return "Odin Owns You All!";
};


// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  var result = "A Saxon has died in combat";
  if (this.health > 0) {
    result = "A Saxon has received " + damage + " points of damage";
  }
  return result;
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) {
  vikingArmy += this.Viking;
};
