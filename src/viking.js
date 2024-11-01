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
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
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
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    // how do we pick a random saxon or viking from their respective arrays?
    // 1. Generate a random index in the two arrays
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    // 2. Use receiveDamage(), pass viking.strength as the input/argument for the damage
    randomSaxon.receiveDamage(randomViking.strength);
    // this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength)
    // if health < 0 --> remove the saxon from the army
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${randomViking.strength} points of damage`;
    }
  }
  saxonAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    this.vikingArmy[randomVikingIndex].receiveDamage(
      this.saxonArmy[randomSaxonIndex].strength
    );

    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
      return `${this.vikingArmy[randomVikingIndex].name} has died in act of combat`;
    } else {
      return `${this.vikingArmy[randomVikingIndex].name} has received ${this.saxonArmy[randomSaxonIndex].strength} points of damage`;
    }
  }
  showStatus() {
    let v = this.vikingArmy.length;
    let s = this.saxonArmy.length;

    if (s === 0 && v !== 0) {
      return "Vikings have won the war of the century!";
    }
    if (v === 0 && s !== 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    if (s !== 0 && v !== 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
