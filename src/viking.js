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
    const randomViking = Math.floor(this.vikingArmy.length * Math.random());
    const randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    const result = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );
    this.cleanArmy(this.saxonArmy);
    return result;
  }
  saxonAttack() {
    const randomViking = Math.floor(this.vikingArmy.length * Math.random());
    const randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    const result = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );
    this.cleanArmy(this.vikingArmy);
    return result;
  }
  cleanArmy(army) {
    for (let i = 0; i < army.length; i++) {
      if (army[i].health <= 0) {
        army.splice(i, 1);
      }
    }
  }
  showStatus() {
    if (this.saxonArmy.length === 0)
      return 'Vikings have won the war of the century!';
    else if (this.vikingArmy.length === 0)
      return 'Saxons have fought for their lives and survived another day...';
    else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
