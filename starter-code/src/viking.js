// Soldier
class Soldier {
  constructor(soldierHealth, soldierStrength) {
    this.health = soldierHealth;
    this.strength = soldierStrength;
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
  constructor(vikingName, vikingHealth, vikingStrength) {
    super(vikingHealth, vikingStrength);
    this.name = vikingName;
    this.health = vikingHealth;
    this.strength = vikingStrength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon

class Saxon extends Soldier {
  constructor(saxonHealth, saxonStrength) {
    super(saxonHealth, saxonStrength);
    this.health = saxonHealth;
    this.strength = saxonStrength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
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
    var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    var result = saxonArmy[saxonIndex].receiveDamage(viking.strength);
    if (saxonArmy[saxonIndex].health <= 0) {
      saxonArmy.splice(saxonIndex, 1);
    }
    return result;
  }
  saxonAttack() {
    var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    var result = vikingArmy[vikingIndex].receiveDamage(
      saxonArmy[saxonIndex].strength
    );
    if (vikingArmy[vikingIndex].health <= 0) {
      vikingArmy.splice(vikingIndex, 1);
    }
    return result;
  }
  showStatus() {}
}
