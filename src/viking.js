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
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
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

  vikingAttack() {
    const randomNum1 = Math.floor(Math.random() * this.saxonArmy.length);
    const randomNum2 = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomNum1];
    const randomViking = this.vikingArmy[randomNum2];

    const aftermath = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomNum1, 1);
    }

    return aftermath;
  }

  saxonAttack() {
    const randomNum1 = Math.floor(Math.random() * this.saxonArmy.length);
    const randomNum2 = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomNum1];
    const randomViking = this.vikingArmy[randomNum2];

    const aftermath = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomNum1, 1);
    }

    return aftermath;
  }

  attack(attackingArmy) {
    const defendingArmy =
      this.vikingArmy === attackingArmy ? this.saxonArmy : this.vikingArmy;

    const randomNum1 = Math.floor(Math.random() * this.saxonArmy.length);
    const randomNum2 = Math.floor(Math.random() * this.vikingArmy.length);
    const randomAttacker = attackingArmy[randomNum1];
    const randomDefender = defendingArmy[randomNum2];

    const aftermath = randomDefender.receiveDamage(randomAttacker.strength);

    if (randomDefender.health <= 0) {
      this.vikingArmy.splice(randomNum1, 1);
    }

    return aftermath;
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
