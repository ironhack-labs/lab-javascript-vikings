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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  //   constructor(health, strength) {
  //     super(health, strength);
  //   }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
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
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const damage = randomViking.strength;
    const result = randomSaxon.receiveDamage(damage);

    if (randomSaxon.health <= 0) {
      for (let i = 0; i < this.saxonArmy.length; i++)
        if (this.saxonArmy[i] === randomSaxon) {
          this.saxonArmy.splice(i, 1);
        }
    }
    return result;
  }

  saxonAttack() {
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const damage = randomSaxon.strength;
    const result = randomViking.receiveDamage(damage);

    if (randomViking.health <= 0) {
      for (let i = 0; i < this.vikingArmy.length; i++)
        if (this.vikingArmy[i] === randomViking) {
          this.vikingArmy.splice(i, 1);
        }
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
    if (this.saxonArmy.length <= 1 && this.vikingArmy.length) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
