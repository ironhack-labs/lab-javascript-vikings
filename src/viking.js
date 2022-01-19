// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    console.log(this.health - theDamage);
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health - theDamage;
    if (this.health > 0) {
      return `${this.name}. has received ${theDamage} points of damage `;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(theDamage) {
    this.health - theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage `;
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
  addViking(Viking) {
    console.log(this.vikingArmy.push(Viking));
  }
  addSaxon(Saxon) {
    console.log(this.saxonArmy.push(Saxon));
  }
  vikingAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }
    return result;
  }
  saxonAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let result = randomViking.receiveDamage(randomSaxon.strength);
    if (randomSaxon.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `${this.vikingArmy} have won the war of the century`;
    }
    if (this.vikingArmy.length === 0) {
      return `${this.saxonArmy} have fought for their lives and survived another day... `;
    }
    if (this.vikingArmy.length >= O && this.saxonArmy.length >= 0) {
      return ` ${this.vikingArmy} and ${this.saxonArmy} are still in the thick of battle.`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
