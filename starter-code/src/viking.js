// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack= function() {
  return this.strength;
}
Soldier.prototype.recibeDamage = function(damage) {
  this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name
}

Viking.prototype.battelCry = function() {
  return 'Odin Owns You All'
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.recibeDamage = function (damage) {
  Soldier.prototype.recibeDamage.call(this, damage);
 // this.health = this.health - damage;
  if(this.health > 0) {
    return this.name + ' has received ' + damage + ' points of damage.'
  } else {
    return this.name + ' has died in act of combat.'
  }
  
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.recibeDamage = function(damage) {
  Soldier.prototype.recibeDamage.call(this, damage);
  if (this.health > 0) {
    return 'A Saxon has received ' + damage + ' points of damge.';
  } else {
    return 'Saxon has died in act of combat.';
  }
};
// War
function War() {}
