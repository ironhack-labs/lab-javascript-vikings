// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
   return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  //this.health = this.health - damage;
  this.health -= damage;
};

var soldier = new Soldier(300, 150);

// Viking 
 // inheritance
 function Viking (health, strength) {
  Soldier.call(this, health, strength);
};

Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
};

// attack method
Viking.prototype.attack = function () {
  return this.strength;
};

// receive damage method
Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
      return this.name + " has died in act of combat";
  }
};

// battlerCry method
Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}

// Saxon
// inheritance
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);

// constructor function
function Saxon (health, strength) {
  this.health = health;
  this.strength = strength;
};

// attack method
Saxon.prototype.attack = function () {
  return this.strength;
};

// receive damage
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};


// War

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
};


// advikking function

War.prototype.addViking = function (aVikingObject) {
  this.vikingArmy.push(aVikingObject);
};
