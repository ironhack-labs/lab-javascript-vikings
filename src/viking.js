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
    if (this.health === 0) {
      let msg = `${this.name} has died in act of combat`;
      return msg;
    } else {
      let msg = `${this.name} has received ${damage} points of damage`;
      return msg;
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
    if (this.health === 0) {
      let msg = `A Saxon has died in combat`;
      return msg;
    } else {
      let msg = `A Saxon has received ${damage} points of damage`;
      return msg;
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
    let randomSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSax = this.saxonArmy[randomSaxIndex];
    let randomVik = this.vikingArmy[randomVikIndex];
    const attack = randomSax.receiveDamage(randomVik.strength);
    if (randomSax.health <= 0) {
      this.saxonArmy.splice(randomSaxIndex, 1);
      return "A Saxon has died in combat";
    } else {
      return attack;
    }
  }

  saxonAttack() {
    let randomSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSax = this.saxonArmy[randomSaxIndex];
    let randomVik = this.vikingArmy[randomVikIndex];
    const attack = randomVik.receiveDamage(randomSax.strength);
    if (randomVik.health <= 0) {
      this.vikingArmy.splice(randomVikIndex, 1);
      return `${randomVik.name} has received ${randomSax.strength} points of damage`;
    } else {
      return attack;
    }
  }
}
