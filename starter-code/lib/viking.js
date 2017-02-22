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

//------------------------------------------------------
// SOLDIER
//------------------------------------------------------
function Soldier (health, strength, damage) {
  this.health = health;
  this.strength = strength;

  this.attack = function() {
  };
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    return this.health;
  };
}

//------------------------------------------------------
// VIKING
//------------------------------------------------------
function Viking (name, health, strength, damage) {
  this.name = name;
  Soldier.call(this, health, strength, damage);

  this.battleCry = function(){
      return "Odin Owns You All!";
  };
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    if ( this.health <= 0 ) {
      return this.name + ' has died in act of combat';
    }
    return name + ' has received ' + damage + ' points of damage';
  };
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

//------------------------------------------------------
// SAXON
//------------------------------------------------------
function Saxon (health, strength, damage) {
  Soldier.call(this, health, strength, damage);
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    if ( this.health <= 0 ) {
      return 'A Saxon has died in combat';
    }
    return 'A Saxon has received ' + damage + ' points of damage';
  };

}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

//------------------------------------------------------
// WAR
//------------------------------------------------------
function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];

  this.addViking = function(viking){
    this.vikingsArmy.push(viking);
  };
  this.addSaxon = function(saxon){
    this.saxonsArmy.push(saxon);
  };
  this.saxonAttack = function(){
    this.vikingsArmy = [];
    return viking.name + ' has received ' + saxon.strength + ' points of damage';
  };
  this.vikingAttack = function(){
    this.saxonsArmy = [];
    return 'A Saxon has died in combat';
  };
  this.fight = function(){

  };
  this.showStats = function() {
    return 'Vikings have won the war of the century!';
  }
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
