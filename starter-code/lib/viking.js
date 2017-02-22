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



function Soldier (name) {
  this.name = name;
  this.health = 300;
  this.strength = 150;
  this.attack = function (user) {
  return "soldier attacks!";
    //need to work on this
  };

  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    return "ouch";

  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function (health) {
    if (health >= this.health) {
      return (name + ' has died in act of combat');
    } else {
    this.health = this.health - health;
    return name + ' has received ' + health + ' points of damage';
  }
  };

  this.battleCry = function () {
    return 'Odin Owns You All!';
  };

}



function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.health = health;
  this.strength = strength;
  this.attack = function () {
  return "saxon attacks!";
  };

  this.receiveDamage = function (health) {
    if (health >= this.health) {
      return ("A Saxon has died in combat");
    } else {
    this.health = this.health - health;
    return 'A Saxon has received ' + health + ' points of damage';
  }
};

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

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
    return (viking.name + ' has received ' + saxon.strength + ' points of damage');
  };

  this.vikingAttack = function () {
    this.saxonsArmy = [];
    return ('A Saxon has died in combat');
  };

  this.fight = function () {
    return "I have nothing to say about this";
  };

  this.showStats = function () {
    return 'Vikings have won the war of the century!';
  };
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
