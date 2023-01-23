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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const damageTaken = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.pop(randomSaxon);
    }
    return damageTaken;
  }
  saxonAttack() {
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const damageTaken = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.pop(randomViking);
    }
    return damageTaken;
  }

  showStatus() {}
}

const viking1 = new Viking("joe", 200, 15);
const viking2 = new Viking("tom", 200, 15);
const viking3 = new Viking("pol", 200, 15);

const saxon1 = new Saxon(100, 30);
const saxon2 = new Saxon(100, 30);
const saxon3 = new Saxon(100, 30);

const war = new War();

war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);

war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);

console.log(war.vikingAttack());
console.log(war.saxonAttack());

console.log(war.vikingArmy);
console.log(war.saxonArmy);
