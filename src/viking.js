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
    if (this.health <= 0) return `${this.name} has died in act of combat`;
    return `${this.name} has received ${damage} points of damage`;
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
    if (this.health <= 0) return `A Saxon has died in combat`;
    return `A Saxon has received ${damage} points of damage`;
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
    let { status, defenders } = this.genericAttack(
      this.vikingArmy,
      this.saxonArmy
    );
    this.saxonArmy = defenders;
    return status;
  }
  saxonAttack() {
    let { status, defenders } = this.genericAttack(
      this.saxonArmy,
      this.vikingArmy
    );
    this.vikingArmy = defenders;
    return status;
  }

  genericAttack(attackers, defenders) {
    let attacker = attackers[Math.floor(Math.random() * attackers.length)];
    let defender = defenders[Math.floor(Math.random() * defenders.length)];
    let status = defender.receiveDamage(attacker.strength);
    defenders = defenders.filter((def) => def.health > 0);
    return { status, defenders };
  }

  showStatus() {
    if (!this.vikingArmy || !this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (!this.saxonArmy || !this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
