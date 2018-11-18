// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

Soldier.prototype.isStillAlive = function() {
  return this.health > 0;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
  } else {
      return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage =  function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
  } else {
      return "A Saxon has died in combat";
  }
}

// War

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  if (viking instanceof Viking) {
      this.vikingArmy.push(viking);
  }
}

War.prototype.deleteViking = function (viking) {
  if (viking instanceof Viking) {
      index = this.vikingArmy.indexOf(viking);
      if (index !== -1) {
          this.vikingArmy.splice(index, 1);
      }
  }
}

War.prototype.addSaxon = function(saxon) {
  if (saxon instanceof Saxon) {
      this.saxonArmy.push(saxon);
  }
}

War.prototype.deleteSaxon = function (saxon) {
  if (saxon instanceof Saxon) {
      index = this.saxonArmy.indexOf(saxon);
      if (index !== -1) {
          this.saxonArmy.splice(index, 1);
      }
  }
}

War.prototype.vikingAttack = function() {
  saxon = this.saxonArmy.random();
  viking = this.vikingArmy.random();
  
  status = saxon.receiveDamage(viking.attack());
  if (!saxon.isStillAlive()) {
      this.deleteSaxon(saxon);
  }
  return status;
}

War.prototype.saxonAttack = function () {
  saxon = this.saxonArmy.random();
  viking = this.vikingArmy.random();

  status = viking.receiveDamage(saxon.attack());
  if (!viking.isStillAlive()) {
      this.deleteViking(viking);
  }
  return status;
}
War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
  } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
