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
    let randomSaxon = Math.floor(
      Math.random() * (this.saxonArmy.length - 0) + 0
    );
    let randomViking = Math.floor(
      Math.random() * (this.vikingArmy.length - 0) + 0
    );

    const result = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].attack()
    );

    if (result === 'A Saxon has died in combat')
      this.saxonArmy.splice(randomSaxon, 1);

    return result;
  }

  saxonAttack() {
    let randomSaxon = Math.floor(
      Math.random() * (this.saxonArmy.length - 0) + 0
    );
    let randomViking = Math.floor(
      Math.random() * (this.vikingArmy.length - 0) + 0
    );

    const result = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].attack()
    );

    if (
      result ===
      `${this.vikingArmy[randomViking].name} has died in act of combat`
    )
      this.vikingArmy.splice(randomViking, 1);

    return result;
  }

  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
