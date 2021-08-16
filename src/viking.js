// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(thedamage) {
    this.health = this.health - thedamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(thedamage) {
    this.health = this.health - thedamage;
    if (this.health > 0) {
      return `${this.name} has received ${thedamage} points of damage`;
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
  receiveDamage(thedamage) {
    this.health = this.health - thedamage;
    if (this.health > 0) {
      return `A Saxon has received ${thedamage} points of damage`;
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
    let attackedSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let attackingViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let result = attackedSaxon.receiveDamage(attackingViking.attack());

    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(attackedSaxon);
    }
    return result;
  }

  saxonAttack() {
    let attackedViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackingSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let result = attackedViking.receiveDamage(attackingSaxon.attack());

    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(attackedViking);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length < 1) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length < 1) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
