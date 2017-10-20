// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};
// Viking !!!!
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
//inherit from soldier
Viking.prototype = new Soldier();
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage; //error
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};
// Saxon the weak one
function Saxon(health, strength) {
Soldier.call(this, health, strength);
}
Saxon.prototype = new Soldier();
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage; //error
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return  "A Saxon has died in combat";
  }
};
