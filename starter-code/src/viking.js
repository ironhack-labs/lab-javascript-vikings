// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function() {
    return strengthArg;
  }
  this.receiveDamage = function(damage) {
    this.health -= damage;
  }
}



// Viking
function Viking() {

}
Viking.prototype=Object.create(Soldier.prototype);
// Saxon
function Saxon() {}

// War
function War() {}
