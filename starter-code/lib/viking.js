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
// }
 // var soldiers = new Object.create.prototype.soldier;
// var soldier = {
//   health: 300;
//   strength:
//  }

function Soldier () {
  this.health = 300;
  this.strength = 150;
  this.attack = function() {
  };
  this.damage = function() {
    this.damage = Soldier.strength;
  };
  this.receiveDamage= function(damage) {
    this.health= this.health-damage;
    var damage=50;
  };
}



function Saxon (health, strength) {
  this.health = 60;
  this.strength = 25;
  this.attack = function(){
  };
  this.damage = function() {
  };
  this.receiveDamage= function(damage) {
    this.health= this.health-damage;
    if (this.health<=0) {
      return ('A Saxon has died in combat');
    } else {
      return ('A Saxon has received '+ damage +" points of damage");
    };
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


function Viking (name, health, strength) {
 this.name = name;
 this.health = health;
 this.strength = strength;
 this.attack = function (){};
 this.receiveDamage= function(damage) {
     this.health= this.health-damage;
     if (this.health<=0) {
       return (name +" has died in act of combat");
     } else {
       return (name + " has received "+ damage +" points of damage");
     }
   };
  this.battleCry= function(){
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


function War () {
  this.vikingsArmy = [];
    this.addViking = function (viking) {
    this.vikingsArmy.push(viking);
  };
  this.saxonsArmy = [];
  this.addSaxon = function (saxon) {
    this.saxonsArmy.push(saxon);
  };
  this.saxonAttack = function () {
    return (viking.name + ' has received ' + saxon.strength + ' points of damage');
  };
  this.vikingAttack = function() {
    this.saxonsArmy = [];
    return ("A Saxon has died in combat");
  };
  this.fight = function(){
  };
  this.showStats = function() {
    return  "Vikings have won the war of the century!";
  };
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
