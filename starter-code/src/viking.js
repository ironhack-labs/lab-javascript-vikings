// Soldier constructor
function Soldier(healthArg, strengthArg) {
  // should receive the health property as its 1st argument
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function () { return this.strength; };
  this.receiveDamage = function (damage) { this.health = this.health - damage; }; }

// Viking constructor
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage"; }
    else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function () {
    return "Odin Owns You All!";
  };
}
// Unimos Viquingos al objeto Soldados, y apuntamos al constructor de Viquingos
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon constructor
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage"; }
    else {
      return this.name + " has died in act of combat";
    }
  }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


// War
function War() {}



/* 

// recibirZascas
function receiveDamage(damage) {
  this.health = this.health - damage;

  if(this.name) {

  }
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage"; }
  else {
    return this.name + " has died in act of combat";
  }
}
 */