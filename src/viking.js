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
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
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
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length),
      randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length),
      result = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);

    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }
  saxonAttack() {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length),
      randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length),
      result = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);

    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }
  showStatus() {
    const livingVikings = this.vikingArmy.length;
    const livingSaxon = this.saxonArmy.length;

    if (!livingSaxon) {
      return `Vikings have won the war of the century!`;
    }

    return !livingVikings ? `Saxons have fought for their lives and survived another day...` : `Vikings and Saxons are still in the thick of battle.`;
  }
  // super bonus
  attack(attacker, attacked) {
    if (!Array.isArray(this[`${attacker}Army`])) {
      throw `${attacker} does not exist!`;
    }
    if (!Array.isArray(this[`${attacked}Army`])) {
      throw `${attacked} does not exist!`;
    }
    if (!this[`${attacker}Army`].length) {
      return `The ${attacker} army is empty!`;
    }
    if (!this[`${attacked}Army`].length) {
      return `The ${attacked} army is empty!`;
    }

    const attackerIndex = Math.floor(Math.random() * this[`${attacker}Army`].length),
      attackedIndex = Math.floor(Math.random() * this[`${attacked}Army`].length),
      result = this[`${attacked}Army`][attackedIndex].receiveDamage(this[`${attacker}Army`][attackerIndex].strength);

    if (this[`${attacked}Army`][attackedIndex].health <= 0) {
      this[`${attacked}Army`].splice(attackedIndex, 1);
    }

    return result;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


