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
    this.health = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
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
    this.health = this.health - damage;
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
    let vikingWarrior = Math.floor(Math.random() * this.vikingArmy.length);

    let randoVik = this.vikingArmy[vikingWarrior];

    let saxonWarrior = Math.floor(Math.random() * this.saxonArmy.length);

    let randoSax = this.saxonArmy[saxonWarrior];

    let saxonDam = randoSax.receiveDamage(randoVik.attack());

    if (randoSax.health <= 0) {
      this.saxonArmy.splice(saxonWarrior, 1);
    }

    return saxonDam;
  }

  saxonAttack() {
    let vikingWarrior = Math.floor(Math.random() * this.vikingArmy.length);

    let randoVik = this.vikingArmy[vikingWarrior];

    let saxonWarrior = Math.floor(Math.random() * this.saxonArmy.length);

    let randoSax = this.saxonArmy[saxonWarrior];

    let vikDam = randoVik.receiveDamage(randoSax.attack());

    if (randoVik.health <= 0) {
      this.vikingArmy.splice(vikingWarrior, 1);
    }

    return vikDam;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy.length) {
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
