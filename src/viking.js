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

console.log(new Soldier(3, 4));

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
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
    const resultvikingAttack = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ].receiveDamage(
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        .strength
    );

    this.saxonArmy = this.saxonArmy.filter(function (saxon) {
      saxon.health >= 0;
    });

    return resultvikingAttack;
  }

  saxonAttack() {
    const resultSaxonAttack = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ].receiveDamage(
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength
    );
    this.vikingArmy = this.vikingArmy.filter(function (viking) {
      viking.health >= 0;
    });
    return resultSaxonAttack;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length === 1 && this.vikingArmy.length == 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
