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

function Soldier (health,strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function (){
  return strength;
};
Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
};

function Viking (name,health,strength) {
  Soldier.call(this, health,strength);
  this.name = name;
  this.battleCry = function(){
    console.log("Odin Owns You All!!");
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

//var viking1 = new Viking("Pepe",100,100);
//console.log(viking1.receiveDamage(45));


function Saxon () {}

function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
