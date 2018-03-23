// Soldier constructor
function Soldier(healthArg, strengthArg) {
  // should receive the health property as its 1st argument
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function () { return this.strength; };
  this.receiveDamage = function (damage) { this.health = this.health - damage; }; }

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage"; }
    else {
      return this.name + " has received " + damage + " points of damage"; }
    if (this.health < 1) {
      return this.name + " has died in act of combat";
    }
  };
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon() {}

// War
function War() {}
