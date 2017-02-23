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

// properties: health & strength
// methods: attack & receiveDamage-
function Soldier (healthParam, strengthParam) {
  this.health = healthParam;
  this.strength = strengthParam;
}


Soldier.prototype.attack = function (soldier){
   soldier.receiveDamage(this.strength);
};

Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
};



function Viking (name, healthParam, strengthParam) {
  Soldier.call(this, healthParam, strengthParam);
  this.name = name;
  this.battleCry = function BattleCry() {
    console.log("MAYAHOOOOOOOOOO");
  };
}


Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (damage > 0) {
    console.log(damage);
    console.log(this.name + "has received" + damage +  "points of damage");
  }
  else if (this.health <= 0) {
    console.log(this.name + " has died in act of combat");
  }
};

Viking.prototype = Object.create(Soldier.prototype);


function Saxon () {}

function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
