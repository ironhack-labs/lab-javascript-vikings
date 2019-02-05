// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
  return strengthArg
  };
  this.receiveDamage = function (damage){
    this.health = this.health - damage;
    return 
  }
}


// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
