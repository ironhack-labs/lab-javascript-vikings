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
      return "A Saxon has received " + damage + " points of damage"; }
    else {
      return "A Saxon has died in combat";
    }
  }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


// War
function War() {}






/* 
Cuando coloco la funcion receiveDamage() por fuera de los constructores de Viking y Saxon
Jasmin se vuelve loca y me tira mis admiradas bolitas verdes de validación.
O Jasmin es un poco rebelde o se me escapa algo, o las dos.
*/

/* 
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