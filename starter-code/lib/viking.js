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

var lodash = require("lodash");

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    var strength = this.strength;
    this.strength = 0;
    return strength;
  };
  this.receiveDamage = function (enemyAttack) {
    this.health -= enemyAttack;
  };
}



function Viking (name, health, strength, attack) {
  Soldier.call (this, health, strength, attack);
  this.name = name;
  this.battleCry = function() {
    var cry = "Odin Owns You All!";
    return cry;
  };
  this.receiveDamage = function (enemyAttack) {
    console.log(this.name, " has received damage ", enemyAttack, " points of Damage!");
  };
  this.dead = function () {
    return  "died in act of combat";
  };

}

Viking.prototype = Object.create(Soldier.prototype);

function Saxon (name, health, strength, attack) {
  Soldier.call (this, health, strength, attack);
  this.name = name;
  this.receiveDamage = function (enemyAttack) {
    console.log("A Saxon has received ", enemyAttack, " points of damage!");
  };
  this.dead = function () {
    console.log(this.name, "has died in act of combat");
  };
}

Saxon.prototype = Object.create(Soldier.prototype);


function War (vikingArmy, saxonArmy) {
  this.saxonAttack = function () {
    var attacker = lodash.sample(saxonArmy);
    var defender = lodash.sample(vikingArmy);
    attacker.attack();
    defender.receiveDamage();

  };
  this.vikingAttack = function () {
    var attacker = lodash.sample(vikingArmy);
    var defender = lodash.sample(saxonArmy);
    attack(attacker);
    defender.receiveDamage();
  };
  this.showStats = function () {
    console.log("Viking Army Stats: ");
    lodash.forEach(vikingArmy, function(value) {
      console.log(this.soldier);
    });
    console.log("Saxon Army Stats: ");
    lodash.forEach(saxonArmy, function(value) {
      console.log(this.soldier);
    });
  };
}

var viking1 = new Viking("Eric Bloodaxe", 100, 70, 80);
var viking2 = new Viking("Bjorn Ironside", 100, 75, 90);
var viking3 = new Viking("Gunnar Hamundarson", 100, 78, 80);
var viking4 = new Viking("Erik the Red", 100, 80, 70);
var viking5 = new Viking("Ragnar Lodbrok", 100, 73, 87);
var saxon1 = new Saxon("Cerdic", 100, 55, 65);
var saxon2 = new Saxon("Cynewulf", 100, 48, 67);
var saxon3 = new Saxon("Edgbert", 100, 59, 72);
var saxon4 = new Saxon("Edward the Elder", 100, 51, 69);
var saxon5 = new Saxon("Beorhtric", 100, 57, 68);

var vikingArmy = [viking1, viking2, viking3, viking4, viking5];
var saxonArmy = [saxon1, saxon2, saxon3, saxon4, saxon5];

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
