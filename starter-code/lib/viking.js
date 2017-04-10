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
//soldier prototyping
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  //returns soldier attack
  this.attack = function(){
    return strength;
  };
  //alters health; we substract damage
  this.receiveDamage = function(damage){
  return this.health -= damage;
  };
}

//viking constructor function
//soldier called, viking.health +strength attribute
//defined by Soldier function
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.battleCry = function (){
    return "Odin Owns You All!";
  };
  this.receiveDamage = function(damage){
      this.health -= damage;
      if (this.health <= 0) {

         return this.name + ' has died in act of combat';
      }
      return this.name + ' has received ' + damage + ' points of damage';

  };
}
//declaramos que viking es un tipo de soldier
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

//Saxon constructor function
function Saxon (health,strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage){
      this.health -= damage;
      if (this.health <= 0) {

         return "A Saxon has died in combat";
      }
      return 'A Saxon has received ' + damage + ' points of damage';
  };
}
//saxons inheritance
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



//War constructor
function War () {
  this.vikingsArmy  = [];
  this.saxonsArmy = [];
  this.addViking = function(){
    this.vikingsArmy.push(Viking);
};
  this.addSaxon = function(){
    this.saxonsArmy.push(Saxon);
  };
  this.saxonAttack = function(){
    return viking.name + ' has received ' + saxon.strength + ' points of damage';
  };
  this.vikingAttack = function(){
    //Viking.attack();
    //Saxon.receiveDamage();
    this.saxonsArmy = [];
    return "A Saxon has died in combat";
  //  saxonsArmy.pull(saxon)
  };
}


module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
