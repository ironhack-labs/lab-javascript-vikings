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
    if (this.name) {
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
    if (this.name) {
      return `A Saxon has received ${theDamage} points of damage `;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    vikingArmy: [];
    saxonArmy: [];
  }
  addViking(Viking) {
    console.log(this.vikingArmy.push(Viking));
  }
  addSaxon(Saxon) {
    console.log(this.saxonArmy.push(Saxon));
  }
  vikingAttack() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
