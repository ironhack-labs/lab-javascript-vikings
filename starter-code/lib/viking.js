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

function Soldier(health, strength) {
  this.health= health;
  this.strength= strength;
  this.attack= function(){
    return strength
  };
  this.receiveDamage= function(damage){
    return this.health= (health - damage);
  };
};

function Viking(name, health, strength, battleCry) {
  Soldier.call(this,health, strength);
  this.name= name;
  this.battleCry = function(){
    return 'Odin Owns You All!'
  };
  this.receiveDamage= function(damage) {
    this.health= (health - damage);
    return this.health<=0 ? this.name + ' has died in act of combat' : this.name + ' has received ' + damage + ' points of damage';
  };
};
  // this.health= 500;
  // this.strength= 100
  // this.attack= function(){
  //   return strength;
  // };
  // this.receiveDamage= function(damage) {
  //   return this.health= (health-damage);
  // };
Viking.prototype=Object.create(Soldier.prototype);


function Saxon (health, strength) {
  Soldier.call(this,health, strength);
  this.receiveDamage= function(damage) {
    this.health= (health - damage);
    return this.health<=0 ? 'A Saxon has died in combat' : 'A Saxon has received ' + damage + ' points of damage';
  };
  // this.attack= function(){
  //   return strength;
  // };
  // this.receiveDamage= function(damage) {
  //   return this.health= (health-damage);
  // };
}
Saxon.prototype=Object.create(Soldier.prototype);


function War () {
  this.vikingsArmy = [];
  this.addViking = function(viking){
    this.vikingsArmy.push(viking);
  }
  this.saxonsArmy = [];
  this.addSaxon = function(saxon){
    this.saxonsArmy.push(saxon);
  }
  this.saxonAttack = function(){
    return viking.name + ' has received ' + saxon.strength + ' points of damage';
  };
  this.vikingAttack = function(){
    this.saxonsArmy=[];
    return 'A Saxon has died in combat';
  }
  this.fight = function(){

  };
  this.showStats = function(){
    return 'Vikings have won the war of the century!';
  }
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
