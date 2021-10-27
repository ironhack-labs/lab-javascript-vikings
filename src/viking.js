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
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let vikingAttack = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health < 0) {
      this.saxonArmy = this.saxonArmy.filter((item) => item !== randomSaxon);
    }

    return vikingAttack;
  }

  saxonAttack() {
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let saxonAttack = randomViking.receiveDamage(randomSaxon.strength);
    if (saxonAttack === randomViking.name + ' has died in act of combat') {
      this.vikingArmy = this.vikingArmy.filter(
        (item) => item.name !== randomViking.name
      );
    }

    return saxonAttack;
  }

  showStatus() {
    if (this.saxonArmy.length < 1) {
      return 'Vikings have won the war of the century!';
    }

    if (this.vikingArmy.length < 1) {
      return 'Saxons have fought for their lives and survived another day...';
    }

    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

//Vikings
const Alfhild = new Viking('Alfhild', 200, 150);
const Aslaug = new Viking('Aslaug', 100, 200);

//saxons
const Siena = new Saxon(50, 20);
const Ethan = new Saxon(110, 400);

const WWIII = new War();

WWIII.addViking(Alfhild);
WWIII.addViking(Aslaug);

WWIII.addSaxon(Siena);
WWIII.addSaxon(Ethan);

WWIII.vikingAttack();
WWIII.saxonAttack();

WWIII.showStatus();

/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
