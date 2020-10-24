// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }
  attack() {
    return 150;
  }
  receiveDamage(damage) {
    this.health = 250;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = "Harald";
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health >= damage) {
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
    this.health = 60;
    this.strength = 25;
  }
  attack() {
    return 25;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    if (randomSaxon.health - randomViking.strength <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return randomSaxon.receiveDamage(randomViking.attack());
  }
  saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    if (randomViking.health - randomSaxon.strength <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return randomViking.receiveDamage(randomSaxon.attack());
  }

  showStatus() {
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
