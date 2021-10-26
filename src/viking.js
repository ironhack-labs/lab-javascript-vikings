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

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return 'A Saxon has died in combat';
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSaxonNumber =
      (this.saxonArmy.length - 1) * Math.floor(Math.random());
    let randomVikingNumber =
      (this.vikingArmy.length - 1) * Math.floor(Math.random());

    const damageResult = this.saxonArmy[randomSaxonNumber].receiveDamage(
      this.vikingArmy[randomVikingNumber].attack()
    );
    if (this.saxonArmy[randomSaxonNumber].health <= 0) {
      this.saxonArmy.splice(randomSaxonNumber, 1);
    }
    return damageResult;
  }
  saxonAttack() {
    let randomSaxonNumber =
      (this.saxonArmy.length - 1) * Math.floor(Math.random());
    let randomVikingNumber =
      (this.vikingArmy.length - 1) * Math.floor(Math.random());

    const damageResult = this.vikingArmy[randomVikingNumber].receiveDamage(
      this.saxonArmy[randomSaxonNumber].attack()
    );
    if (this.vikingArmy[randomVikingNumber].health <= 0) {
      this.vikingArmy.splice(randomVikingNumber, 1);
    }
    return damageResult;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
