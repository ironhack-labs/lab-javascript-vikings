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

  battleCry() {
    return "Odin Owns You All!";
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health == 0) {
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
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health == 0) {
      return "A Saxon has died in combat";
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
    const randonNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randonNumberSaxon];
    const randonNumberViking = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randonNumberViking];
    randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${randomViking.strength} points of damage`;
    }
  }

  saxonAttack() {
    const randonNumberViking = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randonNumberViking];
    const randonNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randonNumberSaxon];
    randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
      return `${randomViking.name} has died in act of combat`;
    } else {
      return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
