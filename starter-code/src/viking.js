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
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
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
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const result = this.saxonArmy[randomSaxonIndex].receiveDamage(
      this.vikingArmy[randomVikingIndex].strength
    );

    // If this randomViking is dead, remove this viking from the vikingArray
    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
  }

  saxonAttack() {
    // Calculate random index for Viking and Saxon arrays
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    // randomViking receives damages equal to the strength of the randomSaxon
    const result = this.vikingArmy[randomVikingIndex].receiveDamage(
      this.saxonArmy[randomSaxonIndex].strength
    );

    // If this randomViking is dead, remove this viking from the vikingArray
    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }

    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
