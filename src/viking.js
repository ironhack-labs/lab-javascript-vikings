// Soldier
class Soldier {
  constructor(health, strength) {
    function attack() {
      return this.strength;
    };
    function recieveDamage(damage) {
       this.health -= damage;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    function VikiRecieveDamage(damage) {
      this.health -= this.damage;
   }
   if (this.health > 0) {
     return `${this.name} has recieved ${this.damage} points of damage`;
   } else {
     return `${this.name} has died in act of combat`;
   } function battleCry () {
    return `Odin Owns You All!`;
  }
  }
}

// Saxon
class Saxon extends Soldier {
constructor(health, strength) {
  attack(this.strength);
  function SaxRecieveDamage(damage) {
    this.health -= this.damage;
  }
  if (this.health > 0) {
    return `A Saxon has recieved ${this.damage} points of damage`;
  } else {
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
