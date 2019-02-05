// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
    return this.strength
  }
  this.receiveDamage = function(theDamage){
    this.health = this.health  - theDamage;
    return;
  }
}

// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
