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
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage) {
    // this.health -= theDamage;
    if ((this.health -= theDamage) > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
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

  receiveDamage(theDamage) {
    // this.health -= theDamage;

    if ((this.health -= theDamage) > 0) {
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

  addViking(aVikingObject) {
    this.vikingArmy.push(aVikingObject);
  }

  addSaxon(aSaxonObject) {
    this.saxonArmy.push(aSaxonObject);
  }

  vikingAttack() {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    let saxonDamage = this.saxonArmy[saxonIndex].receiveDamage(
      this.vikingArmy[vikingIndex].strength
    );

    if (this.saxonArmy[saxonIndex].health <= 0) {
      this.saxonArmy.pop(this.saxonArmy[saxonIndex]);
    }

    return saxonDamage;
  }

  saxonAttack() {
    let vikingValue = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonValue = Math.floor(Math.random() * this.saxonArmy.length);

    let vikingDamage = this.vikingArmy[vikingValue].receiveDamage(
      this.saxonArmy[saxonValue].strength
    );

    if (this.vikingArmy[vikingValue].health <= 0) {
      this.vikingArmy.pop(this.vikingArmy[vikingValue]);
    }

    return vikingDamage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
