// Soldier
class Soldier {

  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(amountOfdamage) {
    this.health = this.health - amountOfdamage;
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  receiveDamage(amountOfdamage) {
    super.receiveDamage(amountOfdamage);

    if (this.health > 0) {
      return (`${this.name} has received ${amountOfdamage} points of damage`);
    } else {
      return (`${this.name} has died in act of combat`);
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(amountOfdamage) {
    super.receiveDamage(amountOfdamage);

    if (this.health > 0) {
      return (`A Saxon has received ${amountOfdamage} points of damage`);
    } else {
      return (`A Saxon has died in combat`);
    }
  }
}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier);
  }

  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
  }

  vikingAttack() {
    const saxon = this.randomSaxon();
    const viking = this.randomViking();
    const message = saxon.receiveDamage(viking.attack());
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    return message;
  }

  saxonAttack() {
    const saxon = this.randomSaxon();
    const viking = this.randomViking();
    const message = viking.receiveDamage(saxon.attack());
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    return message;
  }

  showStatus() {
    if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
    if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
    if (this.vikingArmy.length && this.saxonArmy.length) return "Vikings and Saxons are still in the thick of battle."
  }

  randomViking() {
    return this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];
  }

  randomSaxon() {
    return this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
