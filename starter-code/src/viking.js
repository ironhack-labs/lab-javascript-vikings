// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) { 
  this.health -= damage;
}

// Viking


function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function () {
  return this.strength;
} 

Viking.prototype.receiveDamage = function (damage) {
  this.damage = damage;
  this.health -= this.damage;
  if (this.health !== 0) {
    return this.name + ' has recieved ' + this.damage + ' points of damage';
  } 
  return this.name + ' has died in act of combat!';
}


Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
}

// Saxon


function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage  = function (damage) {
  this.damage = damage;
  this.health -= this.damage;
  if (this.health !== 0) {
    return ('A Saxon has received ' + this.damage + ' points of damage');
  }
  return 'A Saxon has died in combat';
}


// War
function War() {}

