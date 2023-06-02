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
  battleCry() {
    return `Odin Owns You All!`;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}
// const obj1 = new Viking("Björn", 100, 99);
// console.log(obj1);
// console.log(obj1.receiveDamage(90));
// console.log(obj1);

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(vikObj) {
    this.vikingArmy.push(vikObj);
  }
  addSaxon(sax0bj) {
    this.saxonArmy.push(sax0bj);
  }
  vikingAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[vikingIndex];
    const randomSaxon = this.saxonArmy[saxonIndex];

    const damage = randomViking.strength;
    const result = randomSaxon.receiveDamage(damage);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return result;
  }
  saxonAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[vikingIndex];
    const randomSaxon = this.saxonArmy[saxonIndex];

    const damage = randomSaxon.strength;
    const result = randomViking.receiveDamage(damage);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }

    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
