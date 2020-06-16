// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damages) {
    this.health -= damages;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damages) {
    this.health -= damages;
    if (this.health > 0) {
      return `${this.name} has received ${damages} points of damage`;
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
  attack() {
    return this.strength;
  }

  receiveDamage(damages) {
    this.health -= damages;
    if (this.health > 0) {
      return `A Saxon has received ${damages} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  // this function generates a random index depending on the army's length
  getRandomIndex(army) {
    let armySize = army.length;
    return Math.floor(Math.random() * Math.floor(armySize));
  }

  vikingAttack() {
    // random Vikings ans Saxons are picked from their respective army thanks to the random index generator
    let randomViking = this.vikingArmy[this.getRandomIndex(this.vikingArmy)];
    let randomSaxon = this.saxonArmy[this.getRandomIndex(this.saxonArmy)];

    if (randomSaxon.health - randomViking.strength <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }
    return randomSaxon.receiveDamage(randomViking.attack());
  }

  saxonAttack() {
    let randomViking = this.vikingArmy[this.getRandomIndex(this.vikingArmy)];
    let randomSaxon = this.saxonArmy[this.getRandomIndex(this.saxonArmy)];

    if (randomViking.health - randomSaxon.strength <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomSaxon), 1);
    }
    return randomViking.receiveDamage(randomSaxon.attack());
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
