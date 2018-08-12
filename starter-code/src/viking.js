// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (dmg) {
  this.health -= dmg;
  if (this instanceof Viking) {
    if (this.health <= 0)
      return this.name + ' has died in act of combat';
    else
      return this.name + ' has received ' + dmg + ' points of damage';
  }
  if (this instanceof Saxon) {
    if (this.health <= 0)
      return "A Saxon has died in combat";
    else
      return "A Saxon has received " + dmg + " points of damage";
  }
}

Viking.prototype = Object.create(Soldier.prototype)

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!"
}

Saxon.prototype = Object.create(Soldier.prototype)
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}


War.prototype.vikingAttack = function () {
  var lastSax = this.saxonArmy[this.saxonArmy.length - 1]
  var lastVik = this.vikingArmy[this.vikingArmy.length - 1]
  var result = lastSax.receiveDamage(lastVik.strength)
  if (lastSax.health <= 0)
    this.saxonArmy.pop();
  return result;
}

War.prototype.saxonAttack = function () {
  var lastSax = this.saxonArmy[this.saxonArmy.length - 1]
  var lastVik = this.vikingArmy[this.vikingArmy.length - 1]
  var result = lastVik.receiveDamage(lastSax.strength);
  if (lastVik.health <= 0)
    this.vikingArmy.pop()
  return result;
}

War.prototype.showStatus = function () {
  if (this.saxonArmy.length == 0)
    return "Vikings have won the war of the century!"
  if (this.vikingArmy.length == 0)
    return "Saxons have fought for their lives and survive another day..."
  return "Vikings and Saxons are still in the thick of battle."
}