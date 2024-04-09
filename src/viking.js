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
    this.damage = damage;
    this.health -= this.damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= this.damage;
    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
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
    this.damage = damage;
    this.health -= this.damage;
    if (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War extends Soldier {
  constructor() {
    super();
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.Viking = Viking;
    this.vikingArmy.push(this.Viking);
  }
  addSaxon(Saxon) {
    this.Saxon = Saxon;
    this.saxonArmy.push(this.Saxon);
  }

  vikingAttack() {
    // Choose a random Saxon and a random Viking from their armies
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];

    // Call the receiveDamage() method and make a Viking receiveDamage() equal to the strength of a Saxon
    const result = randomSaxon.receiveDamage(randomViking.strength);

    // Remove dead Saxons from the Saxon army
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    // Return the return result of calling receiveDamage() of a Saxon with the strength of a Viking
    return result;
  }
  saxonAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];

    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }

  // to improve the code we should write some helper functions for the repetitiv parts:
  //  e.g. getRandomIndex() to find a random solder and removeDeatSoldier() and call this functions in VikingsAttack() and SaxonAttack()
  //  I'm getting confused bei improving the code, so I'm living it in no DRY option- At leas code is working properly ;)
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length !== 0 || this.vikingArmy.length !== 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

const war1 = new War();
