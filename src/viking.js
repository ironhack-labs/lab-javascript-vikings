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
    super(name);
    this.name = name;
    this.health = health;
    this.strength = strength;
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let a = Math.floor(Math.random() * this.saxonArmy.length);
    let b = Math.floor(Math.random() * this.vikingArmy.length);
    if (this.saxonArmy[a].health <= 0) this.saxonArmy.splice(a, 1);
    return this.saxonArmy[a].receiveDamage(this.vikingArmy[b].strength);
  }

  saxonAttack() {
    let a = Math.floor(Math.random() * this.vikingArmy.length);
    let b = Math.floor(Math.random() * this.saxonArmy.length);
    if (this.vikingArmy[a].health <= 0) this.vikingArmy.splice(a, 1);
    return this.vikingArmy[a].receiveDamage(this.saxonArmy[b].strength);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
