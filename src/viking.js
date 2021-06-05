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
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : 'A Saxon has died in combat';
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
    let attackerViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackedSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let vikAttack = attackedSaxon.receiveDamage(attackerViking.strength);

    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(attackedSaxon), 1);
    }
    return vikAttack;
  }

  saxonAttack() {
    let attackerSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let attackedViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let saxAttack = attackedViking.receiveDamage(attackerSaxon.strength);

    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(attackedViking), 1);
    }
    return saxAttack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
