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

  receiveDamage(damage) {
    this.health = this.health - damage;
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
    this.health = this.health - damage;
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
    let vikPower = Math.floor(Math.random() * this.vikingArmy.length);
    let saxPain = Math.floor(Math.random() * this.saxonArmy.length);
    let MsDead = this.saxonArmy[saxPain].receiveDamage(
      this.vikingArmy[vikPower].strength
    );

    if (this.saxonArmy[saxPain].health <= 0) {
      this.saxonArmy.splice(saxPain, 1);
    }
    return MsDead;
  }

  saxonAttack() {
    let vikPain = Math.floor(Math.random() * this.vikingArmy.length);
    let saxPower = Math.floor(Math.random() * this.saxonArmy.length);
    let MsDead = this.vikingArmy[vikPain].receiveDamage(
      this.saxonArmy[saxPower].strength
    );

    if (this.vikingArmy[vikPain].health <= 0) {
      this.vikingArmy.splice(vikPain, 1);
    }
    return MsDead;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
