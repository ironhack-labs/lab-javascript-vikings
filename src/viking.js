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

  receiveDamage(damage) {
    this.health -= damage;

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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  /*vikingAttack() {
    let vikingAttackLog = this.saxonArmy[0].receiveDamage(
      this.vikingArmy[0].strength
    );

    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.shift();
    }

    return vikingAttackLog;
  }*/

  vikingAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    let vikingAttackLog = this.saxonArmy[randomSaxonIndex].receiveDamage(
      this.vikingArmy[randomVikingIndex].strength
    );

    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
      this.saxonArmy.shift();
    }

    return vikingAttackLog;
  }

  /*saxonAttack() {
    let saxonAttackLog = this.vikingArmy[0].receiveDamage(
      this.saxonArmy[0].strength
    );

    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.shift();
    }

    return saxonAttackLog;
  }*/

  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    let saxonAttackLog = this.vikingArmy[randomVikingIndex].receiveDamage(
      this.saxonArmy[randomSaxonIndex].strength
    );

    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.shift();
    }

    return saxonAttackLog;
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
