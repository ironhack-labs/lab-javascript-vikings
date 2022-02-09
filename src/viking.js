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
    //this.health -= damage;
    super.receiveDamage(damage);
    const isVikingAlive = this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    return isVikingAlive;
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    const isSaxonAlive = this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    return isSaxonAlive;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(vikingsFighters) {
    this.vikingArmy.push(vikingsFighters);
  };

  addSaxon(saxonsFighters) {
    this.saxonArmy.push(saxonsFighters);
  };

  vikingAttack() { };
  saxonAttack() { };
  showStatus() { };
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
