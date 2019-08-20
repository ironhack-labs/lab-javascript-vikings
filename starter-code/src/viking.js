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
    super.receiveDamage(damage);
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
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
    super.receiveDamage(damage);
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
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
    const vikNum = Math.floor(Math.random() * this.vikingArmy.length);
    const saxNum = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVik = this.vikingArmy[vikNum];
    const randomSax = this.saxonArmy[saxNum];
    const message = randomSax.receiveDamage(randomVik.strength);
    if (randomSax.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy[saxNum]);
      return message;
    }
    return message;
  }
  saxonAttack() {
    const vikNum = Math.floor(Math.random() * this.vikingArmy.length);
    const saxNum = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVik = this.vikingArmy[vikNum];
    const randomSax = this.saxonArmy[saxNum];
    const message = randomVik.receiveDamage(randomSax.strength);
    if (randomVik.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy[vikNum]);
      return message;
    }
    return message;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
