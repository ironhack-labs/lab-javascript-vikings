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
    // constructor.health = constructor.health - this.damage;
  }
}

// // Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
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

// // Saxon
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

// // War
// class War {}
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(addingViking) {
    this.vikingArmy.push(addingViking);
  }

  addSaxon(addingSaxon) {
    this.saxonArmy.push(addingSaxon);
  }

  vikingAttack() {
    let saxonIndex = Math.floor(this.saxonArmy.length * Math.random());

    let vikingIndex = Math.floor(this.vikingArmy.length * Math.random());

    let vikingRandom = this.vikingArmy[vikingIndex];
    let saxonRandom = this.saxonArmy[saxonIndex];

    let vikingStrnth = vikingRandom.strength;
    let returnMsg = saxonRandom.receiveDamage(vikingStrnth);

    if (saxonRandom.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }

    return returnMsg;
  }

  saxonAttack() {
    let vikingIndex1 = Math.floor(this.vikingArmy.length * Math.random());
    let saxonIndex1 = Math.floor(this.saxonArmy.length * Math.random());

    let vikingRandom2 = this.vikingArmy[vikingIndex1];
    let saxonRandom2 = this.saxonArmy[saxonIndex1];

    let saxonStrnth = saxonRandom2.strength;
    let returnResult = vikingRandom2.receiveDamage(saxonStrnth);

    if (vikingRandom2.health <= 0) {
      this.vikingArmy.splice(vikingIndex1, 1);
    }

    return returnResult;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length <= 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
