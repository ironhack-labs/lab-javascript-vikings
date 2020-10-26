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
    this.health = this.health - damage;
  }
}

// let soldier;
// const strength = 150;
// const health = 300;
// soldier = new Soldier(health, strength);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// let viking;
// const name = 'Harald';
//  const strength = 150;
// const health = 300;
// viking = new Viking(name, health, strength);

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// let saxon;
// const health = 60;
// const strength = 25;
// saxon = new Saxon(health, strength);

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
    return;
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
    return;
  }

  getRandomSoldier(army) {
    return Math.floor(Math.random() * army.length);
  }

  vikingAttack() {
    const randomVikingIndex = this.getRandomSoldier(this.vikingArmy);

    const randomSaxonIndex = this.getRandomSoldier(this.saxonArmy);

    const vikingSoldier = this.vikingArmy[randomVikingIndex];

    const saxonSoldier = this.saxonArmy[randomSaxonIndex];

    const damageReceived = saxonSoldier.receiveDamage(vikingSoldier.strength);

    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return damageReceived;
  }

  saxonAttack() {
    const randomVikingIndex = this.getRandomSoldier(this.vikingArmy);

    const randomSaxonIndex = this.getRandomSoldier(this.saxonArmy);

    const vikingSoldier = this.vikingArmy[randomVikingIndex];

    const saxonSoldier = this.saxonArmy[randomSaxonIndex];

    const damageReceived = vikingSoldier.receiveDamage(saxonSoldier.strength);

    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return damageReceived;
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
