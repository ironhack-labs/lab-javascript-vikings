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
  constructor(name, health, strenght) {
    super(name);
    this.name = name;
    this.health = health;
    this.strength = strenght;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super();
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health === 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }
  vikingAttack() {
    if (this.saxonArmy.length === 0) {
      return "No Saxons to attack";
    }
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const damage = randomViking.strength;
    const result = randomSaxon.receiveDamage(damage);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }
    return result;
  }

  saxonAttack() {
    if (this.vikingArmy.length === 0) {
      return "No Vikings to attack";
    }
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const damage = randomSaxon.strength;
    const result = randomViking.receiveDamage(damage);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
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
