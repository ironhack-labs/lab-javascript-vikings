// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
};
// Viking
function Viking(name, health, strength) {
  this.name = name;
  // this.health = health;
  // this.strength = strength;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  return (this.health) ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
};
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  return (this.health) ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
};
// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function (viking) {
  if(viking instanceof Viking){
    this.vikingArmy.push(viking);
  }
};
War.prototype.addSaxon = function (saxon) {
  if(saxon instanceof Saxon){
    this.saxonArmy.push(saxon);
  }
};
War.prototype.vikingAttack = function () {
  
};
