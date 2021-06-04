// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(dmg) {
    this.health -= dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health > 0)
      return `${this.name} has received ${dmg} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health > 0) return `A Saxon has received ${dmg} points of damage`;
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
    let randomSaxon = this.randomize(this.saxonArmy.length);
    let randomViking = this.randomize(this.vikingArmy.length);

    const result = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].attack()
    );

    if (this.areYouDead(this.saxonArmy[randomSaxon]))
      this.saxonArmy.splice(randomSaxon, 1);

    return result;
  }

  saxonAttack() {
    let randomSaxon = this.randomize(this.saxonArmy.length);
    let randomViking = this.randomize(this.vikingArmy.length);

    const result = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].attack()
    );

    if (this.areYouDead(this.vikingArmy[randomViking]))
      this.vikingArmy.splice(randomViking, 1);

    return result;
  }

  randomize(max) {
    return Math.floor(Math.random() * (max - 0) + 0);
  }

  areYouDead(soldier) {
    let dead = false;
    if (soldier.health <= 0) dead = true;
    return dead;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0)
      return `Vikings have won the war of the century!`;
    else if (this.vikingArmy.length <= 0)
      return `Saxons have fought for their lives and survived another day...`;
    else return `Vikings and Saxons are still in the thick of battle.`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
