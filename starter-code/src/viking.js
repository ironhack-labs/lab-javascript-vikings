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
    var result = this.saxonArmy[saxonIndex].receiveDamage(
      this.vikingArmy[vikingIndex].attack()
    );
    if (this.saxonArmy[saxonIndex].health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return result;
  }
  saxonAttack() {
    var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    var result = this.vikingArmy[vikingIndex].receiveDamage(
      this.saxonArmy[saxonIndex].attack()
    );
    if (this.vikingArmy[vikingIndex].health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
  }
}
