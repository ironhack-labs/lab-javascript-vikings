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
  this.strength =150;
  this.attack = function() {};
  this.receiveDamage = function(damage){
    this.health = this.health-damage;
  };

  this.removeDamage = function() {
  };
}

function Viking (name, health,strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage= function(damage){
    this.health = this.health-damage;
    if (this.health <= 0){
      return this.name + ' has died in act of combat';
    } else return this.name + " has received " + damage + " points of damage";

};
this.battleCry = function() {
  var odin= "Odin Owns You All!";
  return odin;

  };

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.health=health;
  this.strength=strength;
  this.receiveDamage= function(damage){
    this.health = this.health-damage;
    if (this.health <= 0){
      return ('A Saxon has died in combat');
    } else
      {
        return 'A Saxon has received ' + damage + ' points of damage';
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
  this.saxonAttack= function(){
    return viking.name + ' has received ' + saxon.strength + ' points of damage';
  };
  this.vikingAttack= function(){
    this.saxonsArmy.length=0;
    return "A Saxon has died in combat";
  };
this.fight= function(){};
this.showStats = function(){
  return "Vikings have won the war of the century!";

};


}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
