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

// //------------------------------------------------------
// // SOLDIERS
// //------------------------------------------------------

function Soldier (health,strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
      return this.strength;
  };
  this.receiveDamage = function(damage) {
    return this.health -= damage;
  };
}

// //------------------------------------------------------
// // VIKINGS
// //------------------------------------------------------

function Viking (name,health,strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0){
      return this.name +' has died in act of combat';
    }else{
      return this.name +' has received ' + damage + ' points of damage';
    }
  };
  this.battleCry = function () {
    return 'Odin Owns You All!';
  };
}

// //------------------------------------------------------
// // SAXONS
// //------------------------------------------------------

function Saxon (health,strength) {
  Soldier.call(this, health, strength);
  this.strength = 25;
  this.health = 60;
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0){
      return 'A Saxon has died in combat';
    }else{
      return 'A Saxon has received ' + damage + ' points of damage';
    }
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Saxon.prototype = Object.create(Soldier.prototype);

// //------------------------------------------------------
// // WAR!!
// //------------------------------------------------------

function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];

  this.addViking = function(){
    var generateVikings = Math.floor(Math.random()*(1000 - 100)) + 100;
    this.vikingsArmy.push(generateVikings);
  };
  this.addSaxon = function(){
      var generateSaxons = Math.floor(Math.random()*(500 - 100)) + 100;
      this.saxonsArmy.push(generateSaxons);
  };
  this.saxonAttack = function(){
      return viking.name+" has received "+saxon.strength+" points of damage";
  };

  this.vikingAttack = function(){
    this.saxonsArmy = [];
      return "A Saxon has died in combat";
  };

  this.fight = function (){
      return (this.vikingsArmy*viking.strength) - (this.saxonsArmy*saxon.strength);
  };

  this.showStats = function (){
    if (this.fight < 0) {
      return "Saxons have won the war of the century!";
    }else{
      return "Vikings have won the war of the century!";
    }
  };

}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
