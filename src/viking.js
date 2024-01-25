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
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A ${this.constructor.name} has received ${damage} points of damage`;
    } else {
      return `A ${this.constructor.name} has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier);
  }
  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
  }

  attack(victimArmy, aggressorArmy) {
    // Chose soldiers at random
    let randomVictim =
      victimArmy[Math.floor(Math.random() * victimArmy.length)];
    let randomAggressor =
      aggressorArmy[Math.floor(Math.random() * aggressorArmy.length)];

    let attackResult = randomVictim.receiveDamage(randomAggressor.strength);

    let isVictimDead =
      attackResult === "A Saxon has died in combat" ||
      attackResult === `${randomVictim.name} has died in act of combat`;

    // if randomVictim has died, find index and splice from victimArmy array
    if (isVictimDead) {
      let indexDead = victimArmy.indexOf(randomVictim);
      victimArmy.splice(indexDead, 1);
    }

    return attackResult;
  }

  vikingAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
  }
  saxonAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }

  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
  }
}
