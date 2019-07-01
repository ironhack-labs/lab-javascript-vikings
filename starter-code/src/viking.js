// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  var alive = this.name + " has received " + damage + " points of damage";
  var dead = this.name + " has died in act of combat";
  var hp = (this.health = this.health - damage);
  if (hp > 0) {
    return alive;
  } else {
    return dead;
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  var alive = "A Saxon has received " + damage + " points of damage";
  var dead = "A Saxon has died in combat";
  var hp = (this.health = this.health - damage);
  if (hp > 0) {
    return alive;
  } else {
    return dead;
  }
};

function random(num) {
  var random = Math.floor(Math.random() * num);
  return random;
}
// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function() {
  var randomViking = random(this.vikingArmy.length);
  var randomSaxon = random(this.saxonArmy.length);
  var viking = this.vikingArmy[randomViking];
  var saxon = this.saxonArmy[randomSaxon];
  var result = saxon.receiveDamage(viking.attack());
  if (saxon.health <= 0) {
    this.saxonArmy.splice(randomSaxon, 1);
  }
  return result;
};
War.prototype.saxonAttack = function() {
  var randomViking = random(this.vikingArmy.length);
  var randomSaxon = random(this.saxonArmy.length);
  var viking = this.vikingArmy[randomViking];
  var saxon = this.saxonArmy[randomSaxon];
  var result = viking.receiveDamage(saxon.attack());
  if (viking.health <= 0) {
    this.vikingArmy.splice(randomViking, 1);
  }
  return result;
};
War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  }
  if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  return "Vikings and Saxons are still in the thick of battle.";
};
