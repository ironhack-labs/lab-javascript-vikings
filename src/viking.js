// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };

  attack () {
    return this.strength
  };

  receiveDamage (damage) {
    this.health -= damage
  };

}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  };

  //TODO
receiveDamage(damage) {

  this.health -= damage;

  if (this.health > 0) {
    return `${this.name} has received ${this.damage} points of damage`
  } else {
    return `${this.name} has died in act of combat`
  }

};

battleCry () {
  return "Odin Owns You All!"
};

}

// Saxon
class Saxon extends Soldier {

    // super(health, strength);
    receiveDamage(damage) {

    }

}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
