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
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
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
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
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
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingStrength = this.vikingArmy[randomViking].strength;
    let selectSaxon = this.saxonArmy[randomSaxon];
    let saxonDamage = selectSaxon.receiveDamage(vikingStrength);

    if (selectSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return saxonDamage;
  }
  saxonAttack() {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonStrength = this.saxonArmy[randomSaxon].strength;
    let selectViking = this.vikingArmy[randomViking];
    let vikingDamage = selectViking.receiveDamage(saxonStrength);

    if (selectViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return vikingDamage;
  }
  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
