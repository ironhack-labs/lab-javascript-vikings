// Soldier
function Soldier (healthArg,strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function () {
    return strengthArg;
  };
  this.receiveDamage = function(theDamage){
    return this.health -= theDamage;
  };
}

Soldier.prototype =

// Viking
function Viking () {

}

// Saxon
function Saxon () {}

// War
function War () {}
