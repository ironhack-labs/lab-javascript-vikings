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

function Soldier (health, strength) {
  this.health = health;
  this.strength= strength;
  this.attack= function (){
    return this.strength;
  };

  this.receiveDamage = function (damage){
    this.health -= damage;
  };
}


function Viking (name, health, strenght) {
  this.name = name;
  Soldier.call(this, health, strenght);
  this.battleCry() = function() {
    console.log("Odin Owns You All!");
  };

  this.recDamage = function(amountDamage){
  console.log(this.name + " has received " + amountDamage + " points of damage");
  this.receiveDamage(amountDamage);
  if (this.health <= 0) {
    console.log(this.name + " has died in act of combat");
  }
};

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


function Saxon (health, strenght) {
  Soldier.call(this, health, strenght);

  this.recDamage = function(amountDamage){
  console.log("A Saxon has received " + amountDamage + " points of damage");
  this.receiveDamage(amountDamage);
  if (this.health <= 0) {
    console.log("A Saxon has died in act of combat");
  }
};

}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


function War () {

  var ejercitoViking=[]

  var attackSaxon = saxon.attack();
  this.saxonAttack= function(attackSaxon){
    vikingo.receiveDamage(attackSaxon);
  };

  var attackViking= vikingo.attack();
  this.vikingAttack= function (attackViking){
    saxon.receiveDamage(attackViking);
  };

}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
