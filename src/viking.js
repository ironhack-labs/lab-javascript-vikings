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
  receiveDamage(damage) {
    this.health -= damage;
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
    this.vikingArmy = [Viking];
  }

  addSaxon(Saxon) {
    this.saxonArmy = [Saxon];
  }

  vikingAttack() {
    const randomSax = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const randomVik = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    const attackViking = randomSax.receiveDamage(randomVik.strength);
    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    return attackViking;
  }

  saxonAttack() {
    const randomSax = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    const randomVik = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    const attackSaxon = randomVik.receiveDamage(randomSax.strength);
    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    return attackSaxon;
  }
}
