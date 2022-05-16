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
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
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
    this.vikingArmy.push(viking);
  }
  deathViking;
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const saxonIndex = Math.floor(this.saxonArmy.length * Math.random());
    const saxonRandom = this.saxonArmy[saxonIndex];
    const vikingIndex = Math.floor(this.vikingArmy.length * Math.random());
    const vikingRandom = this.vikingArmy[vikingIndex];

    const damageSax = saxonRandom.receiveDamage(vikingRandom.strength);
    if (saxonRandom.health < 1) {
      this.saxonArmy.pop(saxonRandom);
      return damageSax;
    }
  }
  saxonAttack() {
    const saxonIndex = Math.floor(this.saxonArmy.length * Math.random());
    const saxonRandom = this.saxonArmy[saxonIndex];
    const vikingIndex = Math.floor(this.vikingArmy.length * Math.random());
    const vikingRandom = this.vikingArmy[vikingIndex];
    const damageVik = vikingRandom.receiveDamage(saxonRandom.strength);
    if (vikingRandom.health < 1) this.vikingArmy.splice(vikingIndex, 1);
    return damageVik;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1)
      return `Vikings and Saxons are still in the thick of battle.`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
