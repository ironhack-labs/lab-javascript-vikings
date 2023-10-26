// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
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
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super();
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health === 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
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
    const randomSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxIndex];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const fightAnswere = randomSaxon.receiveDamage(randomViking.attack());

    if (randomViking.attack() > randomSaxon.health) {
      console.log("killed");
      this.saxonArmy.splice(randomSaxIndex, 1);
    }
    return fightAnswere; //+ randomViking.attack();
  }

  saxonAttack() {
    const randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikIndex];
    const randomSax =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const fightAnswere = randomViking.receiveDamage(randomSax.attack());

    if (randomSax.attack() > randomViking.health) {
      console.log("killed");
      this.saxonArmy.splice(randomVikIndex, 1);
    }
    return fightAnswere; //+ randomSax.attack();
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
