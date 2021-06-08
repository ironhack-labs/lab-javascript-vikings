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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
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
    }
    if (this.health <= 0) {
      return 'A Saxon has died in combat';
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
    // Saxon.receiveDamage = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))].strength;
    let saxonRng = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonSoldier = this.saxonArmy[saxonRng];
    let vikingAttackResult = saxonSoldier.receiveDamage(
      this.vikingArmy[0].strength
    );
    // saxonSoldier.receiveDamage(this.vikingArmy[0].strength);
    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(saxonSoldier);
    }
    return vikingAttackResult;
  }
  saxonAttack() {
    let vikingRng = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingSoldier = this.vikingArmy[vikingRng];
    let saxonAttackResult = vikingSoldier.receiveDamage(
      this.saxonArmy[0].strength
    );
    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(vikingSoldier);
    }
    return saxonAttackResult;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
