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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
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
    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
      return "No attack was performed.";
    }
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }
  saxonAttack() {
    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
      return "No attack was performed.";
    }

    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randomVikingIndex];

    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }
  showStatus() {
    return this.saxonArmy.length === 0
      ? "Vikings have won the war of the century!"
      : this.vikingArmy.length === 0
      ? "Saxons have fought for their lives and survived another day..."
      : "Vikings and Saxons are still in the thick of battle.";
  }
}
