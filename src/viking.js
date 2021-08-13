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
    this.health < damage ? (this.health = 0) : (this.health -= damage);
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  return this.health > 0
    ? `${this.name} has received ${damage} points of damage`
    : `${this.name} has died in act of combat`;
};

// Saxon
class Saxon extends Soldier {}

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  return this.health > 0
    ? `A Saxon has received ${damage} points of damage`
    : `A Saxon has died in combat`;
};

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    const saxonPos = Math.floor(Math.random() * this.saxonArmy.length);
    const Saxon = this.saxonArmy[saxonPos];

    const vikingPos = Math.floor(Math.random() * this.vikingArmy.length);
    const Viking = this.vikingArmy[vikingPos];

    const damageDone = Saxon.receiveDamage(Viking.attack());

    if (Saxon.health <= 0) this.saxonArmy.splice(saxonPos, 1);

    return damageDone;
  }
  saxonAttack() {
    const saxonPos = Math.floor(Math.random() * this.saxonArmy.length);
    const Saxon = this.saxonArmy[saxonPos];

    const vikingPos = Math.floor(Math.random() * this.vikingArmy.length);
    const Viking = this.vikingArmy[vikingPos];

    const damageDone = Viking.receiveDamage(Saxon.attack());

    if (Viking.health <= 0) this.vikingArmy.splice(vikingPos, 1);

    return damageDone;
  }
  showStatus() {
    if (this.saxonArmy.length === 0)
      return `Vikings have won the war of the century!`;
    else if (this.vikingArmy.length === 0)
      return `Saxons have fought for their lives and survived another day...`;
    else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
      return `Vikings and Saxons are still in the thick of battle.`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
