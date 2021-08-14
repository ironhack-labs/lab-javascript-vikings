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
  constructor(name, health) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage() {
    return 0;
  }

  battleCry() {
    return 0;
  }
}

// Saxon
class Saxon {}

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
    let maxValueV = this.vikingArmy.length === 0 ? 1 : this.vikingArmy.length;
    // evaluates to a number example : 8
    let randomVikingIndex = Math.floor(Math.random() * (maxValueV - 1));
    //evaluates to a viking from the viking army array
    let randomViking = this.vikingArmy[randomVikingIndex];

    let maxValueS = this.saxonArmy.length === 0 ? 1 : this.saxonArmy.length;
    // evaluates to a number example : 8
    let randomSaxonIndex = Math.floor(Math.random() * (maxValueS - 1));
    //evaluates to a saxon from the saxon army array
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
  }

  saxonAttack() {}

  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
