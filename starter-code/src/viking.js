// Soldier constructor
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Constructor of viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

// Viking inherit from Soldier
Viking.prototype = Object.create(Soldier.prototype);

// Overrride method
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  console.log(this.health);
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};


// Saxon inherit from Soldier
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
}

// Saxon inherit from Soldier
Saxon.prototype = Object.create(Soldier.prototype);

// Overrride method
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  console.log(this.health);
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
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {

  this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

  this.saxonArmy = this.saxonArmy.filter(function(obj) {
    return obj.health > 0;
  });

};
