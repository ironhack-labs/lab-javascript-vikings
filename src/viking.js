// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;

  }

  receiveDamage(damage) {
    const damageReceived = this.health - damage; 
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    const damageReceived = this.health - damage;
    if (damageReceived > 0) {
      return `${this.name} has received ${damage} points of damage`
       } else {
      return `${this.name} has died in act of combat`
      }
    }
  }

  battleCry(){
    return `Odin Owns You All!`
  };
}

// Saxon
class Saxon extends Soldier {
  super(health, stregth;)

  receiveDamage() {};
  
};

}

// War
class War {
  constructor() {
    vikingArmy = [];
    saxonArmy = [];
  }
  addViking() {}
  addSaxon() {}
  vikingAttack() {}
  saxonAttack() {}
  showStatus() {}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
