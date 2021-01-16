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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
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
    let vikingSoldier = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonSoldier = Math.floor(Math.random() * this.saxonArmy.length);
    let damage = this.saxonArmy[saxonSoldier].receiveDamage(
      this.vikingArmy[vikingSoldier].strength
    );
    if (this.saxonArmy[saxonSoldier].health <= 0) {
      this.saxonArmy.splice(saxonSoldier, 1);
    }
    return damage;
  }

  saxonAttack() {
    let vikingSoldier = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonSoldier = Math.floor(Math.random() * this.saxonArmy.length);
    let damage = this.vikingArmy[vikingSoldier].receiveDamage(
      this.saxonArmy[saxonSoldier].strength
    );

    if (this.vikingArmy[vikingSoldier].health <= 0) {
      this.vikingArmy.splice(vikingSoldier, 1);
    }
    return damage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else return "Vikings and Saxons are still in the thick of battle.";
  }
}
