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
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : 'A Saxon has died in combat';
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
    let attacker =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackedSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    if (
      attackedSaxon.receiveDamage(
        attacker.strength === 'A Saxon has died in combat'
      )
    ) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(attackedSaxon), 1);
    }
    return attackedSaxon.receiveDamage(attacker.strength);
  }

  saxonAttack() {
    let attacker =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let attackedViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    attackedViking.receiveDamage(attacker.strength);
    if (this.vikingArmy.attackedViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(attackedViking), 1);
    }
    return attackedViking.receiveDamage(attacker.strength);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
