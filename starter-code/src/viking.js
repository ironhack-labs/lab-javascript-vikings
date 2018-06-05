// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

var strength = 150;
var health = 300;

var newSoldier = new Soldier(health, strength)
console.log(newViking)


Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.damage = damage;
  this.health -= this.damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

var newViking = new Viking('Harald', 300, 150)

console.log(newViking)

Viking.prototype.attack = function() {
  return this.strength;
}

Viking.prototype.receiveDamage = function(damage) {
  this.damage = damage;
  this.health -= this.damage;
  if (this.health > this.damage) {
    return this.name + " has received " + this.damage + " points of damage"
  }
  else if (this.health <= 0) {
    return this.name + " has died in act of combat"
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}


// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

var newSaxon = new Saxon(60, 25);

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.attack = function() {
  return this.strength;
}

Saxon.prototype.receiveDamage = function(damage) {
  this.damage = damage;
  this.health -= this.damage;
  if (this.health > 0) {
    return "A Saxon has received " + this.damage + " points of damage"
  }
  else if (this.health <= 0) {
    return "A Saxon has died in combat"
  }
}



// War
function War() {}
