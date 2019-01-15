// Soldier
class Soldier {
  constructor (healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage 
  } 
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  
  receiveDamage(damage) {
    this.health = this.health - damage 
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    } 

    // if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
    // if the Viking dies, it should return "NAME has died in act of combat"
  } 

  battleCry() {
    return "Odin Owns You All!"
  }
}

viking.attack();

// Saxon
function Saxon() {}

// War
function War() {}
