// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health -= thedamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(thedamage) {
    //this.health -= thedamage;
    super.receiveDamage(thedamage);
    if (this.health < 1) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${thedamage} points of damage`;
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

  receiveDamage(thedamage) {
    //this.health -= thedamage;
    super.receiveDamage(thedamage);
    if (this.health < 1) {
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${thedamage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let recivedDamage = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health) {
      this.saxonArmy.slice(randomSaxon, 1);
    }
    return recivedDamage;
  }
  saxonAtack() {
    let randomSaxon = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingDamage = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health) {
      this.vikingArmy.shift(randomViking, 1);
    }
    return vikingDamage;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
