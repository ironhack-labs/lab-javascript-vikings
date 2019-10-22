// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  //   attack() {
  //     return this.strength;
  //   }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
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
    super();
    this.health = health;
    this.strength = strength;
  }

  //   attack() {
  //     return this.strength;
  //   }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
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

  addViking(fighter) {
    this.vikingArmy.push(fighter);
  }

  addSaxon(fighter) {
    this.saxonArmy.push(fighter);
  }

  vikingAttack() {
    let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let result = this.saxonArmy[saxonRandomIndex].receiveDamage(
      this.vikingArmy[vikingRandomIndex].strength
    );

    if (this.saxonArmy[saxonRandomIndex].health <= 0) {
      this.saxonArmy.splice(saxonRandomIndex, 1);
    }

    return result;
  }

  saxonAttack() {
    let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let result = this.vikingArmy[vikingRandomIndex].receiveDamage(
      this.saxonArmy[saxonRandomIndex].strength
    );

    if (this.vikingArmy[vikingRandomIndex].health <= 0) {
      this.vikingArmy.splice(vikingRandomIndex, 1);
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}
