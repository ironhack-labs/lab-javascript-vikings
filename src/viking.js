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
    // is the order important?
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
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
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    // select a random
    let randSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randSax = this.saxonArmy[randSaxIndex];
    // select a random Viking
    let randVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randViking = this.vikingArmy[randVikIndex];
    // make saxon receive damage equal to strength of Viking
    randSax.receiveDamage(randViking.strength);
    if (randSax.health < 0) {
      this.saxonArmy.splice(randSaxIndex, 1);
    }
  }
  saxonAttack() {
    // select a random
    let randSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randSax = this.saxonArmy[randSaxIndex];
    // select a random Viking
    let randVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randViking = this.vikingArmy[randVikIndex];
    // make saxon receive damage equal to strength of Viking
    randViking.receiveDamage(randSax.strength);
    if (randViking.health < 0) {
      this.vikingArmy.splice(randVikIndex, 1);
    }
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
