// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(dmg) {
    this.health -= dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(dmg) {
    this.health -= dmg;
    return this.health > 0
      ? `${this.name} has received ${dmg} points of damage`
      : `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    this.health -= dmg;
    return this.health > 0
      ? `A Saxon has received ${dmg} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }
  vikingAttack() {
    const randomizerSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomizerViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomizerSaxon];
    const randomViking = this.vikingArmy[randomizerViking];
    const result = randomSaxon.receiveDamage(randomViking.strength);
    randomSaxon.health < 1 ? this.saxonArmy.pop(randomSaxon) : '';
    return result;
  }
  saxonAttack() {
    const randomizerSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomizerViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomizerSaxon];
    const randomViking = this.vikingArmy[randomizerViking];
    const result = randomViking.receiveDamage(randomSaxon.strength);
    randomViking.health < 1 ? this.vikingArmy.pop(randomViking) : '';
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
/* new War().addViking('Harald');
console.log(vikingArmy); */
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
