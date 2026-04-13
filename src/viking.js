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
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
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
  attack() {
    return this.strength;
  }

  receiveDamage(moreDamage) {
    this.health -= moreDamage;

    if (this.health > 0) {
      return `A Saxon has received ${moreDamage} points of damage`;
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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    // const randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // const saxon = this.saxonArmy[randomIndex];

    // 1. pick random Viking
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // 2. pick random Saxon
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // 3. Saxon receives damage from Viking
    const result = saxon.receiveDamage(viking.strength);

    // 4. remove Saxon if dead
    if (saxon.health <= 0) {
      const index = this.saxonArmy.indexOf(saxon);
      this.saxonArmy.splice(index, 1);
    }

    // 5. return result message
    return result;
  }

  saxonAttack() {
    // 1. pick random Viking
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // 2. pick random Saxon
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const result = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      const index = this.vikingArmy.indexOf(viking);
      this.vikingArmy.splice(index, 1);
    }

    return result;
  }
  showStatus() {}
}
