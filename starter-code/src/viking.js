// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack () {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}


// Viking

class Viking extends Soldier {
  constructor(name, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = name;
  }

receiveDamage(damage) {
  this.health -= damage;

  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  
  else {
    return this.name + " has died in act of combat";
  }
}

battleCry() {
  return "Odin Owns You All!";
}

}




// Saxon
function Saxon() {}



// War
function War() {}
