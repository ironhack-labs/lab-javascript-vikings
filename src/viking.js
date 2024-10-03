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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  attack(army1, army2) {
    const attacker = army1[Math.floor(Math.random() * army1.length)];
    const defender = army2[Math.floor(Math.random() * army2.length)];
    //console.log(defender, attacker)
    defender.receiveDamage(attacker.strength);
    if (defender.health <= 0) {
      army2.splice(army2.indexOf(defender), 1);
    }
    return defender.receiveDamage(attacker.strength);
  }

  vikingAttack() {
    const randomIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const randomViking = this.vikingArmy[randomIndex];
    const randomIndex2 = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomIndex2];

    const result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomIndex2, 1);
    }
    return result;
    //   return this.attack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    const randomIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const randomViking = this.vikingArmy[randomIndex];
    const randomIndex2 = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomIndex2];

    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomIndex, 1);
    }
    return result;
    // return this.attack(this.saxonArmy, this.vikingArmy);
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
