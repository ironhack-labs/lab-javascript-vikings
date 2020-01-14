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
    super.receiveDamage(damage);

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

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.injured = false;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    this.injured = true;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  getRandomSoldier(Army) {
    const randomIndex = Math.floor(Math.random() * Army.length);
    return Army[randomIndex];
  }
  removeSoldier(soldier, Army) {
    var index = Army.indexOf(soldier);
    Army.splice(index, 1);
  }
  vikingAttack() {
    const randomSaxon = this.getRandomSoldier(this.saxonArmy);
    const randomViking = this.getRandomSoldier(this.vikingArmy);

    const returnValue = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0)
      this.removeSoldier(randomSaxon, this.saxonArmy);
    return returnValue;
  }
  saxonAttack() {
    const randomSaxon = this.getRandomSoldier(this.saxonArmy);
    const randomViking = this.getRandomSoldier(this.vikingArmy);

    const returnValue = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0)
      this.removeSoldier(randomViking, this.vikingArmy);
    return returnValue;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
