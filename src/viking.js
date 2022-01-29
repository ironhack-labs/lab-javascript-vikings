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
    return 'Odin Owns You All!';
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

// const Vik1 = new Viking('Kratos', 20, 10);
// const Vik2 = new Viking('Atreus', 20, 15);
// const Vik3 = new Viking('Patrik', 20, 12);
// const Sax1 = new Saxon('Vikran', 10, 5);
// const Sax2 = new Saxon('Drogo', 15, 8);
// const Sax3 = new Saxon('Krypton', 12, 6);

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
    const randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomVik = this.vikingArmy[randomVikIndex];
    const randomSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSax = this.saxonArmy[randomSaxIndex];

    if (randomSax.health < 0) {
      this.saxonArmy.splice(randomSaxIndex); // Pq não tá funcionandoooo
    }

    return randomSax.receiveDamage(randomVik.strength);
  }
  saxonAttack() {
    const randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomVik = this.vikingArmy[randomVikIndex];
    const randomSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSax = this.saxonArmy[randomSaxIndex];

    if (randomVik.health <= 0) {
      this.vikingArmy.splice(randomVikIndex);
    }

    return randomVik.receiveDamage(randomSax.strength);
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
