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

function Soldier () {
  this.health = 300;
  this.strength = 150;
  this.attack = function (){
    return this.strength;
  };
  this.receiveDamage = function (damage){
    this.health -= damage;
  };
}

function Viking (name) {
  Soldier.call(this);
  this.name = name;
  this.receiveDamage = function (damage) {
    this.health -= damage;
    // this.super();
    return this.health <= 0 ?
      (name + ' has died in act of combat') :
      (name + ' has received ' + damage + ' points of damage');
  };
  this.battleCry = function (){
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);


function Saxon () {
  Soldier.call(this);
  
}

Saxon.prototype = Object.create(Soldier.prototype);

function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
