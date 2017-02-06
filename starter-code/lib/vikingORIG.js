// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
 function Soldier(healthParams, strengthParams) {
   this.health = healthParams;
   this.strength = strengthParams;
 }

 Soldier.prototype.attack = function () {

 };

 Soldier.prototype.receiveDamage = function (damage) {
   this.health -= damage;
   return this.name + " has received " + damage + " points of damage";
 };


// // GENERAL
// //------------------------------------------------------
// function General() {}
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

function Viking (name, healthParams, strengthParams) {
  Soldier.call(this, healthParams, strengthParams);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);


Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}

Viking.prototype.healthCheck = function () {
  if (this.health <= 0) {
  console.log(this.name + " has died in act of combat");
  }
}




// =========SAXONS=====================
function Saxons (healthParams, strengthParams) {
  Soldier.call(this, healthParams, strengthParams);
}

Saxons.prototype = Object.create(Soldier.prototype);




// VIKINGS should return "{name} has died in act of combat" when the health is equal or lower than 0:
//
//      AssertionError: expected 'Mr. Jermain Witting has received 300 points of damage' to equal 'Mr. Jermain Witting has died in act of combat'
//      + expected - actual
//
//      -Mr. Jermain Witting has received 300 points of damage
//      +Mr. Jermain Witting has died in act of combat










function Saxon () {}

function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
