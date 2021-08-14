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

  battleCry() {
    return 'Odin Owns You All!';
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
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
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War

class War {
  addViking(Viking) {
    // const newViking = this.viking;
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let vikingStrength =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        .strength;

    let randomIndexSaxon = [Math.floor(Math.random() * this.saxonArmy.length)];

    let fightResult =
      this.saxonArmy[randomIndexSaxon].receiveDamage(vikingStrength);

    if (this.saxonArmy[randomIndexSaxon].health <= 0) {
      this.saxonArmy.splice(randomIndexSaxon, 1);
      return fightResult;
    } else {
      return fightResult;
    }
  }
  saxonAttack() {
    let saxonStrength =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        .strength;

    let randomIndexViking = [
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let fightResult =
      this.vikingArmy[randomIndexViking].receiveDamage(saxonStrength);

    console.log(fightResult);

    if (this.vikingArmy[randomIndexViking].health <= 0) {
      this.vikingArmy.splice(randomIndexViking, 1);
      return fightResult;
    } else {
      return fightResult;
    }
  }
  showStatus() {
    if (!this.saxonArmy.length)
      return 'Vikings have won the war of the century!';
    if (!this.vikingArmy.length)
      return 'Saxons have fought for their lives and survived another day...';
    if (!this.saxonArmy.length === !this.vikingArmy.length)
      return 'Vikings and Saxons are still in the thick of battle.';
  }
  vikingArmy = [];
  saxonArmy = [];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
