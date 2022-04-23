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

    if (this.health >= 1) {
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
  constructor(health, strength) {
    super(health, strength);
  }
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
  vikingArmy = [];
  saxonArmy = [];

  addViking(aVikingobject) {
    this.vikingArmy = [Harald];
    return undefined;
  }
  addSaxon(aSaxonobject) {
    this.saxonArmy = [saxon];
  }
  vikingAttack() {
 let oldHealth = saxon.health
  this.vikingAttack = oldHealth - Viking.strength;

    if ((this.saxonArmy.length = 0)) {
      return 'A Saxon has died in combat';
    }
  }

  saxonAttack() {
    let oldHealth
   oldHealth = Harald.health - saxon.strength;

    if ((this.vikingArmy.length = 0)) {
      return 'A Saxon has died in combat';
    }
  }

  showStatus() {
    if ((this.saxonArmy.length = 0)) {
      return 'Vikings have won the war of the century!';
    } else if ((this.vikingArmy.length = 0)) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length === this.vikingArmy.length) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
const Harald = new Viking('Harald', 300, 150);
const saxon = new Saxon(60, 25);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
