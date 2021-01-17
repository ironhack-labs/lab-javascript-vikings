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
    super.receiveDamage(theDamage);
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
    super(health, strength);
  }
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
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
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }
  vikingAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[randomSaxonIndex];
    let returnOfReceivedDamage = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return returnOfReceivedDamage;
  }
  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[randomSaxonIndex];
    let returnOfReceivedDamage = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return returnOfReceivedDamage;
  }
}
