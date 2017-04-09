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

  this.health = health;
  this.strength = strength;
 }

 Soldier.prototype.attack = function(victim){
   return victim.receivedDamage(this.strength);
 };

  Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
 };



function Viking(name, health, strength){
  this.health = health;
  this.strength = strength;
  this.name = name;
  this.battleCry = function(){
    return "Odin Owns You All!";
};
}

Viking.prototype = new Soldier();

Viking.prototype.receiveDamage = function(damage){

  Soldier.prototype.receiveDamage.call(this,damage);  //bringing the receiveDamage method from soldier.prototype to Vikingprototype

  if(this.health > 0) {
  return this.name + "has received " + damage + " points of damage";
  } else {
  return this.name + " has died in act of combat";
  }
};



function Saxon(health, strength){
  this.health = health;
  this.strength = strength;
}

Saxon.prototype = new Soldier();

Saxon.prototype.receiveDamage = function(damage){

  Soldier.prototype.receiveDamage.call(this,damage);  //bringing the receiveDamage method from soldier.prototype to Vikingprototype

  if(this.health > 0) {
  return  "A Saxon has received " + damage + " points of damage";
  } else {
  return  "A Saxon has died in combat";
  }
};


Saxon.prototype = Object.create(Soldier.prototype);

function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
