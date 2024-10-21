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
    return `Odin Owns You All!`;
  }
}

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
    const result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon !== randomSaxon);
    }
    return result;
  }

  saxonAttack() {
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const result = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
        this.vikingArmy = this.vikingArmy.filter(viking => viking !== randomViking)
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

const war1 = new War();
const viking1A = new Viking("Bjorn", 100, 50);
const viking2A = new Viking("Ragnar", 150, 60);
const saxon1A = new Saxon(30, 25);
const saxon2A = new Saxon(30, 20);
war1.addViking(viking1A);
war1.addViking(viking2A);
war1.addSaxon(saxon1A);
war1.addSaxon(saxon2A);

console.log(war1.vikingAttack());
console.log(war1.vikingAttack());
console.log(war1.showStatus());

const war2 = new War();
const viking1B = new Viking("Erik", 50, 30);
const viking2B = new Viking("Loki", 60, 25);
const saxon1B = new Saxon(100, 50);
const saxon2B = new Saxon(100, 50);
war2.addViking(viking1B);
war2.addViking(viking2B);
war2.addSaxon(saxon1B);
war2.addSaxon(saxon2B);

console.log(war2.saxonAttack());
console.log(war2.saxonAttack());
console.log(war2.saxonAttack());
console.log(war2.showStatus()); 

const war3 = new War();
const viking1C = new Viking("Thor", 100, 50);
const viking2C = new Viking("Odin", 100, 50);
const saxon1C = new Saxon(100, 50);
const saxon2C = new Saxon(100, 50);
war3.addViking(viking1C);
war3.addViking(viking2C);
war3.addSaxon(saxon1C);
war3.addSaxon(saxon2C);

console.log(war3.vikingAttack());
console.log(war3.saxonAttack());
console.log(war3.vikingAttack());
console.log(war3.saxonAttack());
console.log(war3.showStatus()); 

