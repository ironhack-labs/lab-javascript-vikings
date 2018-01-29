// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(theDamage) {
  this.health = this.health - theDamage;
};
// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(theDamage) {
  this.health = this.health - theDamage;
  if (this.health > 0) {
    return `${this.name} has received ${theDamage} points of damage`;
  }
  return `${this.name} has died in act of combat`;
};

Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!';
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(theDamage) {
  this.health = this.health - theDamage;
  if (this.health > 0) {
    return `A Saxon has received ${theDamage} points of damage.`;
  }
  return 'A Saxon has died in combat';
};

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
  const random = Math.floor(Math.random() * this.saxonArmy.length);
  const selectedSaxon = this.saxonArmy[random];
  this.saxonArmy.forEach(function(saxon, i) {
    if (saxon.health <= 0) {
      this.saxonArmy.splice(i, 1);
    }
  });
  return selectedSaxon.receiveDamage(this.vikingArmy[0].strength);
};

War.prototype.saxonAttack = function() {
  const random = Math.floor(Math.random() * this.vikingArmy.length);
  const selectedViking = this.vikingArmy[random];

  return selectedViking.receiveDamage(this.saxonArmy[0].strength);
};

War.prototype.showStatus = function() {};
