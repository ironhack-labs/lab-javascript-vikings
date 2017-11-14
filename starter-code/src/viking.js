// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function() {
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

Viking.prototype.attack = function() {
  return this.strength;
};

Viking.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health,strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call (this, damage);
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  else {
    return "A Saxon has died in combat";
  }
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

Saxon.prototype.receiveDamage =  function(damage) {
    Soldier.prototype.receiveDamage.call(this, damage);
    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    } else {
        return "A Saxon has died in combat";
    }
};

Soldier.prototype.isAlive = function() {
    return this.health > 0;
};

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
};

War.prototype.deleteSaxon = function (saxon) {
    if (saxon instanceof Saxon) {
        index = this.saxonArmy.indexOf(saxon);
        if (index !== -1) {
            this.saxonArmy.splice(index, 1);
        }
    }
};

War.prototype.vikingAttack = function() {
    saxon = this.saxonArmy.random();
    viking = this.vikingArmy.random();

    status = saxon.receiveDamage(viking.attack());
    if (!saxon.isAlive()) {
        this.deleteSaxon(saxon);
    }
    return status;
};
