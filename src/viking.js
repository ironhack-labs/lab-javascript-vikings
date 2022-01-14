// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  };

  receiveDamage(damage) {
    this.health -= damage
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (Viking === "alive"){
      return (`${this.name} has receive ${this.damage}`);
    } else {
      return (`${this.name} has receive died in combat`)
    }
  };

  battleCry(){
    return ('Odin Owns You All!')
  }
}


// Saxon
class Saxon extends Soldier { 
  
  receiveDamage(damage) {
    this.health -= damage;
    if (Saxon === 'alive' ) {
      return (`A Saxon has received ${this.damage} points of damage`)
    } else {
      return (`A Saxon has died in combat`)
    }
  }
}

// War
class War{}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
