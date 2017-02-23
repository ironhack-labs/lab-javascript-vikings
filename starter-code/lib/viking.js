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

//===================== SOLDIERS =======================

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
  };
  this.receiveDamage = function (damage){
     this.health = this.health - damage;
     return this.health;
   };
}

//===================== VIKINGS =======================

function Viking (name, health, strength) {
  Soldier.call (this, health, strength);
  this.name = name;
  this.receiveDamage = function (damage){
    this.health = this.health - damage;

    if (this.health <= 0) {
       return this.name + ' has died in act of combat';
     }else{
       return this.name +' has received ' + damage + ' points of damage';
          }
    return (name + ' has received ' + damage + ' points of damage');
};

    this.battleCry = function(){
      return "Odin Owns You All!";
    };
}
var Astrid = new Viking ('Astrid', 300, 150);
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

//===================== SAXONS =======================

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage){
      this.health = this.health - damage;

      if (this.health <= 0) {
          return ('A Saxon has died in combat');
      }else{
          return ('A Saxon has received ' + damage + ' points of damage');
        }
    };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


//===================== WAR =======================

function War () {
this.vikingsArmy =[];
this.addViking = function(viking){
  this.vikingsArmy.push(viking);
};
this.saxonsArmy = [];
this.addSaxon = function(saxon){
  this.saxonsArmy.push(saxon);
};
this.saxonAttack = function(){
  return (viking.name + ' has received ' + saxon.strength + ' points of damage');
};
this.vikingAttack = function(){
  this.saxonsArmy.pop();
  return 'A Saxon has died in combat';
};
this.fight = function() {

};
this.showStats = function(){
  return ('Vikings have won the war of the century!');
};
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
