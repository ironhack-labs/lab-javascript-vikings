// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  recieveDamage(damage) {
    //this.damage = damage;
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
    super.attack();
    return this.strength;
  }

  recieveDamage(damage) {
    super.recieveDamage(damage);
    if (this.health >= 1) {
      return `${this.name} has received ${this.damage} points of damage`;
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
    super.attack();
    return this.strength;
  }

  recieveDamage(damage) {
    super.recieveDamage(damage);
    if (this.health >= 1) {
      return `A Saxon has received ${this.damage} points of damage`;
    } else {
      return `A saxon has died in combat`;
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
    let whichViking =
      this.vikingArmy[Math.floor(math.random() * this.vikingArmy.length)];
    let whichSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let attackOutcome = whichSaxon.recieveDamage(whichViking.attack());
    if (whichSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(whichSaxon), 1);
    }
    return attackOutcome;
  }

  saxonAttack() {
    let whichViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let whichSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let attackOutcome = whichViking.recieveDamage(whichSaxon.attack());
    if (whichViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(whichViking), 1);
    }
    return attackOutcome;
  }
  showStatus() {
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day ...`;
    } else if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
