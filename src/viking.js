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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
  
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`; 
    }

    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return `A Saxon has died in combat`; 
    }

    return `A Saxon has received ${damage} points of damage`;
  }
}
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier);
  } 
  
  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
  }

  vikingAttack() {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = this.vikingArmy[vikingIndex];
    let randomSaxon = this.saxonArmy[saxonIndex];
    let battleFeedback = randomSaxon.receiveDamage(
    randomViking.attack()
    );
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }

    return battleFeedback;
  }

  saxonAttack() {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = this.vikingArmy[vikingIndex];
    let randomSaxon = this.saxonArmy[saxonIndex];
    let battleFeedback = randomViking.receiveDamage(
    randomSaxon.attack()
    );
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }

    return battleFeedback;
  }
 
  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.vikingArmy.length > 0) {
      return 'Vikings have won the war of the century!';
    } else {
      return 'Saxons have fought for their lives and survived another day...'
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
