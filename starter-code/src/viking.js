// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
} 

Soldier.prototype.receiveDamage = function (damage) { 
  this.health -= damage;
}

// Viking

/*Viking.prototype = Object.create(Soldier);*/

function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
  this.health = healthArg;
  this.strength = strengthArg;
}

Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return this.name + ' has recieved ' + this.damage + ' points of damage!';
  } 
  return this.name + ' has died in act of combat!';
}

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
}

// Saxon

/*Saxon.prototype = Object.create(Soldier);*/

function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.health = healthArg;
  this.strength = strengthArg;
}

Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage  = function (damage) {
  this.damage = damage;
  this.health -= this.damage;
  if (this.health > 0) {
    return ('A Saxon has received ' + this.damage + ' points of damage');
  }
  return 'A Saxon has died in combat';
}

// War
function War() {}

