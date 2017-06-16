// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}
Soldier.prototype.attack = function attack () {
  return this.strength;
};
Soldier.prototype.receiveDamage = function receiveDamage (theDamage) {
  this.health -= theDamage;
};
// Viking
// Prototype
Viking.prototype = Object.create(Soldier.prototype);
function Viking (name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
}
Viking.prototype.receiveDamage = function receiveDamage (theDamage) {
  this.health -= theDamage;
  if (this.health > 0){
    return name + " has received " + theDamage + " points of damage";
  }else {
    return name + " has died in act of combat";
  }
};

// Saxon
function Saxon () {}

// War
function War () {}
