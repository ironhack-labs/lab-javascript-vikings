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
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  // no need to write constructore method as class will inherit perfectly from the parents class
  // constructor(health, strength){
  //   super(health, strength);
  // }
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  };
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  randomGenerator(range) {
    return Math.floor(Math.random() * range);
  }
  attack(army) {
    const oppositeArmyIndex = this.randomGenerator(army === "viking" ? this.saxonArmy.length : this.vikingArmy.length);
    const armyIndex = this.randomGenerator(army === "viking" ? this.vikingArmy.length : this.saxonArmy.length);
    let returnStatus;
    if (army === "viking") {
      returnStatus = this.saxonArmy[oppositeArmyIndex].receiveDamage(this.vikingArmy[armyIndex].strength);
      if (this.saxonArmy[oppositeArmyIndex].health <= 0)
        this.saxonArmy.splice(oppositeArmyIndex, 1);
    }
    else {
      returnStatus = this.vikingArmy[oppositeArmyIndex].receiveDamage(this.saxonArmy[armyIndex].strength);
      if (this.vikingArmy[oppositeArmyIndex].health <= 0)
        this.vikingArmy.splice(oppositeArmyIndex, 1);
    }
    return returnStatus;
  }
  vikingAttack() {
    return this.attack("viking")
  }
  saxonAttack() {
    return this.attack("saxon");
  }
  showStatus() {
    if (!this.saxonArmy.length)
      return `Vikings have won the war of the century!`;
    else if (!this.vikingArmy.length)
      return `Saxons have fought for their lives and survived another day...`;
    else
      return `Vikings and Saxons are still in the thick of battle.`
  }
}
