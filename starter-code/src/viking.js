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
    this.health += -damage;
    return undefined;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health += -damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }

    // Clever return with conditional operator - also passes test
    // return this.health > 0
    //   ? `${this.name} has received ${damage} points of damage`
    //   : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health += -damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
    // Clever return with conditional operator - also passes test
    // return this.health > 0
    //   ? `A Saxon has received ${damage} points of damage`
    //   : `A Saxon has died in combat`;
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
    return undefined;
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
    return undefined;
  }

  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[saxonIndex];
    let randomViking = this.vikingArmy[vikingIndex];

    let finalDamage = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return finalDamage;
  }

  saxonAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[saxonIndex];
    let randomViking = this.vikingArmy[vikingIndex];

    let finalDamage = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return finalDamage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
