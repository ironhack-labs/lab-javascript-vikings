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

};


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }
  attack() {
    return this.strength;
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
    return 'Odin Owns You All!';
  }
};

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  attack() {
    return this.strength;
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

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);

  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);

  }

  vikingAttack() {
    let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxRemove = this.saxonArmy.indexOf(randomSax);
    let vikingAttack = randomSax.receiveDamage(randomVik.strength);
    if (randomSax.health <= 0) {
      this.saxonArmy.splice(saxRemove, 1);
    }
    return vikingAttack;
  }
  saxonAttack() {
    let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let vikRemove = this.vikingArmy.indexOf(randomVik);
    let saxonAttack = randomVik.receiveDamage(randomSax.strength);
    if (randomVik.health <= 0) {
      this.vikingArmy.splice(vikRemove, 1);
    }
    return saxonAttack;
  }
}
