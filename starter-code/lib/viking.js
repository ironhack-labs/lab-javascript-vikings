// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
// function Soldier() {}
//
// //------------------------------------------------------
// // GENERAL
// //------------------------------------------------------
// function General() {}
//
// //------------------------------------------------------
// // FOOTVIKING
// //------------------------------------------------------
// function FootViking() {}
//
// module.exports = {
//   Soldier:    Soldier,
//   General:    General,
//   FootViking: FootViking
// };

function Soldier (health, strength, attack, receiveDamage) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return strength;
  };
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    return this.name + ' has received ' + damage + ' points of damage';
  };
}

Viking.prototype = Object.create(Soldier.prototype);


function Viking (name, health, strength, attack, receiveDamage, battleCry) {
  Soldier.call(this, health, strength, attack, receiveDamage);
  this.name = name;
  this.battleCry = function(){
    return ("Odin Owns You All!");
  };
}


if (this.health <= 0) {
  return (this.name + " has died in act of combat");
}

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon (health, strength, attack, receiveDamage) {
  Soldier.call(this, health, strength, attack);
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    return  'A Saxon has received ' + damage + ' points of damage';
  };
}

function War (vikingsArmy, saxonsArmy, addViking) {
  this.vikingsArmy = [];
  this.saxonsArmy = [];
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
