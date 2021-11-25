// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => this.strength;
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
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return 'A Saxon has died in combat';
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
  chooseRandom = (army) => Math.floor(Math.random() * army.length);
  attack(offense, defense) {
    let randomOffenseIndex = this.chooseRandom(offense);
    let randomOffense = offense[randomOffenseIndex];
    let randomDefenseIndex = this.chooseRandom(defense);
    let randomDefense = defense[randomDefenseIndex];

    const defenseDamage = randomDefense.receiveDamage(randomOffense.attack());

    if (randomDefense.health <= 0) {
      defense.splice(randomDefenseIndex, 1);
    }

    return defenseDamage;
  }
  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
