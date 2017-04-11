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
    if (damage >= this.health){
      return this.name + " has died in act of combat";
    } else {
      this.health = this.health - damage;
      return this.name + ' has received ' + damage + ' points of damage';
    }

    };
  }


Viking.prototype = Object.create(Soldier.prototype);


function Viking (name, health, strength, attack, battleCry) {
  Soldier.call(this, health, strength, attack);
  this.name = name;
  this.battleCry = function(){
    return ("Odin Owns You All!");
  };
}

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon (health, strength, attack, receiveDamage) {
  Soldier.call(this, health, strength, attack);
  this.receiveDamage = function(damage) {
    if (damage >= this.health) {
      return "A Saxon has died in combat";
    } else {
      this.health = this.health - damage;
      return  'A Saxon has received ' + damage + ' points of damage';
    }
  };
}

function War (vikingsArmy, saxonsArmy, addViking, addSaxon) {
  this.vikingsArmy = [];
  this.addViking = function(viking) {
    this.vikingsArmy.push(viking);
  };
  this.vikingAttack = function(){
    this.saxonsArmy=[];
    return 'A Saxon has died in combat';
  };
  this.saxonsArmy = [];
  this.addSaxon = function(saxon) {
    this.saxonsArmy.push(saxon);
  };
  this.saxonAttack = function(){
    return viking.name + ' has received ' + saxon.strength + ' points of damage';
  };
  this.fight = function(){

  };
  this.showStats = function(){
    return 'Vikings have won the war of the century!';
  };
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
