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
    if (this.health >= 1) {
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
    if (this.health >= 1) {
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

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let sax = Math.floor(Math.random() * this.saxonArmy.length);
    let vik = Math.floor(Math.random() * this.vikingArmy.length);
    let damage = this.vikingArmy[vik].strength;
    let saxon = this.saxonArmy[sax];
    let result = this.saxonArmy[sax].receiveDamage(damage);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(sax, 1);
    }
    return result;
  }

  saxonAttack() {
    let sax = Math.floor(Math.random() * this.saxonArmy.length);
    let vik = Math.floor(Math.random() * this.vikingArmy.length);
    let damage = this.saxonArmy[sax].strength;
    let viking = this.vikingArmy[vik];
    let result = this.vikingArmy[vik].receiveDamage(damage);

    if (viking.health <= 0) {
      this.vikingArmy.splice(vik, 1);
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
