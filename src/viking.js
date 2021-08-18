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

  vikingAttack() {
    super.attack();
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
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    super.attack;
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

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);

    let vikingAttackMessage = this.saxonArmy[saxonRandom].receiveDamage(
      this.vikingArmy[vikingRandom].strength
    );
    for (let saxon of this.saxonArmy) {
      if (saxon.health <= 0) {
        this.saxonArmy.splice(this.saxon, 1);
      }
    }
    return vikingAttackMessage;
  }

  saxonAttack() {
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);

    let saxonAttackMessage = this.vikingArmy[vikingRandom].receiveDamage(
      this.saxonArmy[saxonRandom].strength
    );

    for (let viking of this.vikingArmy) {
      if (viking.health <= 0) {
        this.vikingArmy.splice(this.viking, 1);
      }
    }
    return saxonAttackMessage;
  }

  showStatus() {
    if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.saxonArmy.length === 0 && this.vikingArmy.lenth !== 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0 && this.saxonArmy.length !== 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
