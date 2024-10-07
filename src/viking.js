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
    return this.health < 1
      ? `${this.name} has died in act of combat`
      : `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    return this.health < 1
      ? `A Saxon has died in combat`
      : `A Saxon has received ${damage} points of damage`;
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
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health < 1) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }

    return result;
  }
  saxonAttack() {
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let result = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health < 1) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
