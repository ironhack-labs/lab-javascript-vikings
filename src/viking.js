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
    this.health -= theDamage;
    if (this.health > 0) {
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let isViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randonViking = this.vikingArmy[isViking];

    let isSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randonSaxon = this.saxonArmy[isSaxon];

    let battleResult = randonSaxon.receiveDamage(randonViking.attack());

    if (randonSaxon.health <= 0) {
      this.saxonArmy.splice(isSaxon, 1);
    }
    return battleResult;
  }
  saxonAttack() {
    let idxViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randonViking = this.vikingArmy[idxViking];

    let idxSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randonSaxon = this.saxonArmy[idxSaxon];

    let battleResult = randonViking.receiveDamage(randonSaxon.attack());

    if (randonViking.health <= 0) {
      this.vikingArmy.splice(idxViking, 1);
    }

    return battleResult;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
