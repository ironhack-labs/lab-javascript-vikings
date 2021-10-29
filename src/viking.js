// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  
    this.attack = function() {
    return this.strength
  }

  this.receiveDamage = function(damage) {
    this.health -= damage
  }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    
    this.receiveDamage = function(damage) {
      this.health -= damage;
      return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    this.battleCry = function() {
      return "Odin Owns You All!"
    }

    }


  }


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);

    this.receiveDamage = function(damage) {
      this.health -= damage;
      return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  
    addViking = function(Viking) {
      vikingArmy.push(new Viking(health, strength))
    }
  
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
