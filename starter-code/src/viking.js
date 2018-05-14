// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
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

Viking.prototype.receiveDamage = function (damage) {
  Soldier.receiveDamage.call(this, damage);
  const msg = this.health > 0
    ? `${this.name} has received ${this.damage} points of damage`
    : '{this.name} has died in act of combat';
  return msg;
};

Viking.prototype.battleCry = function () {
  return ('Odin Owns You All!');
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  const msg = this.health > 0
    ? `A Saxon has received ${this.damage} points of damage`
    : 'A Saxon has died in combat';
  return msg;
};

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {

}
