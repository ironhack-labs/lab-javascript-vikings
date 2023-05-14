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

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }

    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }

    if (this.health === 0) {
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    // get random index value from Viking Army Array
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );

    // get random viking
    const randomViking = this.vikingArmy[randomVikingIndex];

    //get random index value from Viking Army Array
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    // get random saxon
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    let result = randomSaxon.receiveDamage(randomViking.strength);
    return result;

    /*     this.saxonArmy.forEach((aSaxon, index) => {
        if (aSaxon.health === 0) {
          this.saxonArmy.splice(index, 1);
        }
      }); */
  }

  saxonAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );

    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    let result = randomViking.receiveDamage(randomSaxon.strength);
    return result;
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
