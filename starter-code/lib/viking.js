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
  this.attack = function attack () {};
  this.receiveDamage = function damage () {
    var damage = 50;
    this.health = this.health - damage;
  };
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.constructor = Viking;

function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function (health) {
    if (health >= this.health) {
      return (name + ' has died in act of combat');
    } else {
    this.health = this.health - health;
    return this.name + ' has received ' + health + ' points of damage';
    }
  };
  this.battleCry = function battleCry () {
    return 'Odin Owns You All!';
  };
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.constructor = Saxon;

function Saxon (name, health, strength) {
  Soldier.call(this, health, strength);
  this.health = 60;
  this.strength = 25;
  this.receiveDamage = function (damage) {
    if (health >= this.health) {
      return ("A Saxon has died in combat");
    } else {
    this.health = this.health - damage;
    return 'A Saxon has received ' + damage + ' points of damage' ;
    }
  };
}

function War () {
  this.vikingsArmy = [];
  this.addViking = function(viking) {
    this.vikingsArmy.push(viking);
  };
  this.saxonsArmy = [];
  this.addSaxon = function(saxon) {
    this.saxonsArmy.push(saxon);
  };

  this.saxonAttack = function () {
    return viking.name + ' has received ' + saxon.strength + ' points of damage' ;
  };

  this.vikingAttack = function () {
    this.saxonsArmy.length = 0 ;
    return 'A Saxon has died in combat' ;
  };
  this.fight = function () {};
  this.showStats = function () {
    return 'Vikings have won the war of the century!' ;
  };
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
