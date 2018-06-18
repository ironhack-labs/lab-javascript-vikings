// Soldier
function Soldier(h, s) {
  this.health = h;
  this.strength = s;
}

Soldier.prototype.attack = function () {
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}


// Viking
function Viking(n, h, s) {
  Soldier.call(this, h, s);
  this.name = n;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}
// War 

function War() {
  this.vikingArmy = new Array();
  this.saxonArmy = new Array();
}

War.prototype.addViking = function(v) {
  this.vikingArmy.push(v);
}
War.prototype.addSaxon = function(s) {
  this.saxonArmy.push(s);
}
War.prototype.vikingAttack = function() {
  var sax = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
  var vik = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
  sax.receiveDamage(vik.strength);
  if (sax.health < 1) { 

  }
}
War.prototype.saxonAttack = function() {
  
}
War.prototype.showStatus = function() {
  
}
// Saxon
function Saxon(h, s) {
  Soldier.call(this, h, s);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  else {
    return "A Saxon has died in combat";
  }
}
