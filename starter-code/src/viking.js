// Soldier

function Soldier(healthArm, strengthArm) {
  this.health = healthArm;
  this.strength = strengthArm;

  this.attack = function() {
    return this.strength;
  };

  this.receiveDamage = function(damageArm) {
    this.health -= damageArm;
  };
}

// Viking

function Viking(nameVik,healthVik, strengthVik, ) {
  Soldier.call(this, healthVik, strengthVik);
  this.name = nameVik;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.constructor = Viking;

Vikings.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
  }
  else{
    return `${this.name} has died in act of combat`;
  }

}

/*



// Saxon
function Saxon() {}

// War
function War() {}
*/
