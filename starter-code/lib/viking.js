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
  this.attack = function () {
  };
  this.receiveDamage = function (damage) {
    this.health -= damage;
  };
}

Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.attack = function (strength) {
  };
  this.receiveDamage = function(damage) {
    console.log(name + ' has received ' + damage + ' points of damage.');
    this.health = health - damage;
    if(this.health <= 0) {
      return name + ' has died in act of combat';
    }
    return this.health;
  };
  this.battleCry = function () {
    return "Odin Owns You All!";
  };

}

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function (strength) {
  };
  this.receiveDamage = function(damage) {
    console.log( 'A Saxon has received ' + damage + ' points of damage.');
    this.health = health - damage;
    console.log(this.health);
    if(this.health <= 0) {
      return 'A Saxon has died in combat';
    }
    return this.health;
  };
}

var oberinth = new Viking('Oberinth Hnkui', 600, 170);
var ragnhild = new Viking('Ragnhild Rogle', 200, 270);
var solveig = new Viking('Solveig Danhsk', 1000, 70);
var yngvild = new Viking('Yngvild', 500, 100);
var vikingspool = [oberinth, ragnhild, solveig, yngvild];

var createSaxon = new Saxon(60, 25);

function War () {
  this.vikingsArmy = [];
  this.addViking = function(viking) {
    var number = Math.round(Math.random()*3);
    this.vikingsArmy.push(vikingspool[number]);
    return this.vikingsArmy;
  };

  this.saxonsArmy = [];
  this.addSaxon = function(saxon) {
    this.saxonsArmy.push(createSaxon);
  };

  this.saxonAttack = function() {
    return viking.name + ' has received ' + saxon.strength + ' points of damage';
  };

  this.vikingAttack = function() {
    this.saxonsArmy.shift();
    return 'A Saxon has died in combat';
  };


}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
