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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
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
    let counterSaxons = 0;
    let counterVikings = 0;

    counterVikings = Math.floor(
      Math.random(counterVikings) * this.vikingArmy.length
    );
    counterSaxons = Math.floor(
      Math.random(counterSaxons) * this.saxonArmy.length
    );

    let result = this.saxonArmy[counterSaxons].receiveDamage(
      this.vikingArmy[counterVikings].strength
    );

    if (result === `A Saxon has died in combat`) {
      this.saxonArmy.splice([counterSaxons], 1);
    }

    return result;
  }
  saxonAttack() {
    let counterSaxons = 0;
    let counterVikings = 0;

    counterVikings = Math.floor(
      Math.random(counterVikings) * this.vikingArmy.length
    );
    counterSaxons = Math.floor(
      Math.random(counterSaxons) * this.saxonArmy.length
    );

    let result = this.vikingArmy[counterVikings].receiveDamage(
      this.saxonArmy[counterSaxons].strength
    );

    if (result.includes("died") === true) {
      this.vikingArmy.splice([counterVikings], 1);
    }

    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
