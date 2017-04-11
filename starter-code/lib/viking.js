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
  //push a viking object into viking army array
  this.addViking = function(viking){
    this.vikingsArmy.push(viking);
  };
//push a saxon object into saxon array
  this.addSaxon = function(saxon){
    this.saxonsArmy.push(saxon);
  };
}
//check soldier's health
War.prototype.checkDeath =  function(){
  if(this.saxonsArmy[0].health < 0){
    this.saxonsArmy.pop();
  }
  if (this.vikingsArmy[0].health <0) {
    this.vikingsArmy.pop();
  }
};
//start a fight
War.prototype.fight = function(){
  this.vikingAttack();
  this.saxonAttack();
};
//define saxon attack
War.prototype.saxonAttack = function(){

    return this.vikingsArmy[0].receiveDamage(this.saxonsArmy[0].attack());
};
//define viking attack
War.prototype.vikingAttack = function(){
    var result = this.saxonsArmy[0].receiveDamage(this.vikingsArmy[0].attack());
    this.checkDeath();
    return result;
};
//log final stats
War.prototype.showStats = function(){
  return 'Vikings have won the war of the century!';
};


module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
