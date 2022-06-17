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
    } else if (this.health === 0) {
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
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health === 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War

class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    randomSaxon.health -= randomViking.strength;
    for (let i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health < 1) {
        this.saxonArmy.splice(i, 1);
      }
      return 'A Saxon has died in combat';
    }
  }
  saxonAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    randomViking.health -= randomSaxon.strength;
    for (let i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i].health === 0) {
        this.vikingArmy.splice(i, 1);
      }
      return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;
    }
  }
  showStatus() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

/*switch ((this.vikingArmy, this.saxonArmy)) {
    case this.vikingArmy.length === 0:
      return 'Saxons have fought for their lives and survived another day...';

    case this.saxonArmy.length === 0:
      return 'Vikings have won the war of the century!';

    case this.vikingArmy.length > 0 && this.saxonArmy > 0:
      return 
  }*/

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
