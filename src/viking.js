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
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
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
  addViking(vikObj) {
    this.vikingArmy.push(vikObj);
  }
  addSaxon(saxObj) {
    this.saxonArmy.push(saxObj);
  }
  vikingAttack() {
    const randomSax = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVik = Math.floor(Math.random() * this.vikingArmy.length);

    let result = this.saxonArmy[randomSax].receiveDamage(
      this.vikingArmy[randomVik].strength
    );

    if (this.saxonArmy[randomSax].health <= 0) {
      this.saxonArmy.splice(randomSax, 1);
    }

    return result;
  }

  saxonAttack() {
    const randomSax = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVik = Math.floor(Math.random() * this.vikingArmy.length);
    let result = this.vikingArmy[randomVik].receiveDamage(
      this.saxonArmy[randomSax].strength
    );

    if (this.vikingArmy[randomVik].health <= 0) {
      this.vikingArmy.splice(randomVik, 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fougth for their lives and survived another day...`;
    } else {
      return `Vikings have won the war of the century!`;
    }
  }
}
