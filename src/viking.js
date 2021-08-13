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

    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
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

    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
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
    let i = Math.floor(Math.random() * this.saxonArmy.length);
    let j = Math.floor(Math.random() * this.vikingArmy.length);

    this.saxonArmy[i].receiveDamage(this.vikingArmy[j].strength);

    if (this.saxonArmy[i].health <= 0) this.saxonArmy.splice(i, 1);
  }

  saxonAttack() {
    let x = Math.floor(Math.random() * this.vikingArmy.length);
    let y = Math.floor(Math.random() * this.saxonArmy.length);

    this.vikingArmy[x].receiveDamage(this.saxonArmy[y].strength);

    if (this.vikingArmy[x].health <= 0) this.vikingArmy.splice(x, 1);
  }

  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
