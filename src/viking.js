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
    this.health = this.health - damage;
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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
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
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  saxonAttack() {
    const vIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const attackedViking = this.vikingArmy[vIndex];
    const sIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const attackingSaxon = this.saxonArmy[sIndex];
    const result = attackedViking.receiveDamage(attackingSaxon.strength);
    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(vIndex, 1);
    }
    return result
    // return `${attackedViking.name} has received ${attackingSaxon.strength} points of damage`
  }
  vikingAttack() {
    const vIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const attackingViking = this.vikingArmy[vIndex];
    const sIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const attackedSaxon = this.saxonArmy[sIndex];
    const result = attackedSaxon.receiveDamage(attackingViking.strength);
    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(sIndex, 1);
    }
    return result
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
