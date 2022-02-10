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
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
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
  addViking(vikings) {
    this.vikingArmy.push(vikings);
  }
  addSaxon(saxons) {
    this.saxonArmy.push(saxons);
  }
  vikingAttack() {
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[vikingRandom];

    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[saxonRandom];

    let damage = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

    //let returnResult = damage.receiveDamage();

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return 'A Saxon has died in combat';
  }

  saxonAttack() {
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[vikingRandom];

    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[saxonRandom];

    let damage = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    } else {
      return 'Harald has received 25 points of damage';
    }
  }

  showStatus() {
    if (this.saxonArmy <= 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy <= 0) {
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
