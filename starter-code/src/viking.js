// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}


Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (theDamage) {
  this.health = this.health - theDamage;
};


// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + ' has received ' + damage + ' points of damage';
  } else if (this.health <= 0) {
    return this.name + ' has died in act of combat';
  }
};

Viking.prototype.attack = function () {
  return this.strength;
};

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
};


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return 'A Saxon has received ' + damage + ' points of damage';
  } else if (this.health <= 0) {
    return 'A Saxon has died in combat';
  }
};

Saxon.prototype.attack = function () {
  return this.strength;
};


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function () {
};

War.prototype.saxonAttack = function () {

};
War.prototype.showStatus = function () {

};

