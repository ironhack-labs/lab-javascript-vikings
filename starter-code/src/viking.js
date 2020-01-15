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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  // super(health, strength);

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
    let saxonPos = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingPos = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonStatus;

    let currentSaxon = this.saxonArmy[saxonPos];
    let vikingStrength = this.vikingArmy[vikingPos].strength;

    saxonStatus = currentSaxon.receiveDamage(vikingStrength);

    if (currentSaxon.health <= 0) {
      this.saxonArmy.splice(saxonPos, 1);
    }

    return saxonStatus;
  }

  saxonAttack() {
    let saxonPos = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingPos = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingStatus;

    let currentViking = this.vikingArmy[vikingPos];
    let SaxonStrength = this.saxonArmy[saxonPos].strength;

    vikingStatus = currentViking.receiveDamage(SaxonStrength);

    if (currentViking.health <= 0) {
      this.vikingArmy.splice(vikingPos, 1);
    }

    return vikingStatus;
  }
  showStatus() {}
}
