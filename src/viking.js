// Soldier
// oh wow, such soldier
class Soldier {
  constructor(health, strength) {
    // oh wow, such health
    this.health = health;
    // oh wow, such strength
    this.strength = strength;
  }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
