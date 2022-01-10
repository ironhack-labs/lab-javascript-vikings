// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor (name, health, strength) {
    
    //super calls the parent class's constructor 
    super(health, strength);
    //super must be used before this
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0 ){
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    
  }

  battleCry () {
    return "Odin Owns You All!";
  }
  
}

// Saxon
class Saxon extends Soldier {
//i always need a constructor
  constructor (health, strength) {
    super(health, strength);
  }
  attack () {
    return this.strength;
  }

  receiveDamage (damage) {
    this.health = this.health - damage;
    if (this.health > 0 ) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
