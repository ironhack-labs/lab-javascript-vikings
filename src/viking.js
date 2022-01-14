// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
      return this.strength;
    },
    this.receiveDamage = function(damage) {
      this.health = this.health - damage;
    }
  }
}

// Viking
class Viking {
  constructor() {

  }
}

// Saxon
class Saxon {
  constructor() {

  }
}

// War
class War {
  constructor() {

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
