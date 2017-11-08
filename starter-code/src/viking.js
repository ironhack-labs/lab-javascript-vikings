// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
}

Soldier.prototype.isAlive = function() {
  return this.health > 0;
}


// Viking

Viking.prototype = Object.create(Soldier.prototype)

function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health - damage > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else if (this.health - damage <= 0) {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}


// Saxon

Saxon.prototype = Object.create(Soldier.prototype)

function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
}

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else if (this.health - damage <= 0) {
    return "A Saxon has died in combat";
  }
}



// War

War.prototype = Object.create(Soldier.prototype);

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}


War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.deleteSaxon = function(saxon) {
  index = this.saxonArmy.indexOf(saxon);
  if (index !== -1) {
    this.saxonArmy.splice(index, 1);
  }
}


War.prototype.deleteViking = function(viking) {
  index = this.vikingArmy.indexOf(viking);
  if (index !== -1) {
    this.vikingArmy.splice(index, 1);
  }
}

War.prototype.vikingAttack = function() {
  var saxon = this.saxonArmy.random();
  var viking = this.vikingArmy.random();

  var result = saxon.receiveDamage(viking.attack());

  if (!saxon.isAlive()) {
    this.deleteSaxon(saxon);
  }
  return result;
}

War.prototype.saxonAttack = function() {
  var saxon = this.saxonArmy.random();
  var viking = this.vikingArmy.random();

  var result = viking.receiveDamage(saxon.attack());

  if (!viking.isAlive()) {
    this.deleteViking(viking);
  }
  return result;
}

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
