// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  //attack method
  Soldier.prototype.attack = function() {
    return this.strength;
  };
  //receiveDamage method
  Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  //Call to parent constructor
  Soldier.call(this, health, strength);
}

// prototype inherited from Soldier
Viking.prototype = Object.create(Soldier.prototype);
//assigns the own Viking constructor
Viking.prototype.constructor = Viking;

//receiveDamage Method overwritten--> inherited from Soldier
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return (this.name + " has received " + damage + " points of damage");
  } else {
    return (this.name + " has died in act of combat");
  }
};

//battleCry method
Viking.prototype.battleCry = function battleCry() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  //Call to parent constructor
  Soldier.call(this, health, strength);
}

// create Saxon prototype inherited from Soldier
Saxon.prototype = Object.create(Soldier.prototype);
//fix Saxon constructor
Saxon.prototype.constructor = Saxon;

//attack Method  not need to overwrite--> inherited from Soldier

//receiveDamage Method overwritten--> inherited from Soldier
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return ("A Saxon has received " + damage + " points of damage");
  } else {
    return ("A Saxon has died in combat");
  }
};

// War--> completado
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

//addViking Method
War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

//addSaxon Method
War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};
