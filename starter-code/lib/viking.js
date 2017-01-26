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

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
  this.receiveDamage = function(damage){
    this.health -= damage;
  };
}


function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health < 0){
      return this.name + " has died in act of combat";
    }
    return this.name + " has received " + damage + " points of damage";
  };
  this.battleCry = function(){
    console.log("Odin Owns You All!");
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Saxon () {}

function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
