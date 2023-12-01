/** Get random integer
 *
 * Range: [0-max[ */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
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
    const randomVikingIndex = getRandomInt(this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxonIndex = getRandomInt(this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const message = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return message;
  }

  saxonAttack() {
    const randomVikingIndex = getRandomInt(this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxonIndex = getRandomInt(this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const message = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return message;
  }

  // bonus iteration
  attack(attacker) {
    const randomVikingIndex = getRandomInt(this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxonIndex = getRandomInt(this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    let message;

    switch (attacker) {
      case "viking":
        message = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
          this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return message;
      case "saxon":
        message = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return message;
      default:
        throw new Error(
          "war.attack(): invalid argument 'attacker'; must be either 'viking' or 'saxon'"
        );
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }

    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}



