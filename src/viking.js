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
    this.damage = damage;
    if (this.damage) {
      this.health -= this.damage;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.damage = damage;
    if (this.damage) {
      this.health -= this.damage;
    }
    while (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
    }
    while (this.health === 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.damage = damage;
    if (this.damage) {
      this.health -= this.damage;
    }
    while (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`;
    }
    while (this.health === 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy = viking; // ??
  }
  addSaxon(saxon) {
    this.saxonArmy = saxon; // ??
  }
  vikingAttack() {}
  saxonAttack() {}
  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
