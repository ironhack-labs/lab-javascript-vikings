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
    } else return `${this.name} has died in act of combat`;
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
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const vikingInd = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonInd = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingSoldiler = this.vikingArmy[vikingInd];
    const saxonSoldiler = this.saxonArmy[saxonInd];
    const damage = vikingSoldiler.strength;
    const result = saxonSoldiler.receiveDamage(damage);
    if (saxonSoldiler.health <= 0) {
      this.saxonArmy.splice(saxonInd, 1);
    }
    return result;
  }
  saxonAttack() {
    const vikingInd = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonInd = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingSoldiler = this.vikingArmy[vikingInd];
    const saxonSoldiler = this.saxonArmy[saxonInd];
    const damage = saxonSoldiler.strength;
    const result = vikingSoldiler.receiveDamage(damage);
    if (vikingSoldiler.health <= 0) {
      this.vikingArmy.splice(vikingInd, 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else return "Vikings and Saxons are still in the thick of battle.";
  }
}
