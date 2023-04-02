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
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// BONUS - Iteration 4
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

  getRandomSoldier(arr) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    return random;
  }

  vikingAttack() {
    let randomViking = this.getRandomSoldier(this.vikingArmy);
    let randomSaxon = this.getRandomSoldier(this.saxonArmy);

    const attackResult = randomSaxon.receiveDamage(randomViking.attack());

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }

    console.log(attackResult);
    return attackResult;
  }

  saxonAttack() {
    let randomSaxon = this.getRandomSoldier(this.saxonArmy);
    let randomViking = this.getRandomSoldier(this.vikingArmy);

    const attackResult = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }

    console.log(attackResult);
    return attackResult;
  }

  // BONUS - Iteration 5
  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if (!this.vikingsArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }

  /// WORKING ON GENERIC ATTACK METHOD:
  getDamageResult(attacker, viking, saxon) {
    let damage = null;

    if (attacker === "viking") {
      damage = saxon.receiveDamage(viking.attack());
      if (saxon.health <= 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
      }
    } else {
      damage = viking.receiveDamage(saxon.attack());
      if (viking.health <= 0) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
      }
    }

    return damage;
  }

  genericAttackMethod(attacker) {
    if (attacker !== "viking" || attacker !== "saxon") {
      console.log(`Please, check "attacker" name!`);
      return;
    } else {
      let randomViking = this.getRandomSoldier(this.vikingArmy);
      let randomSaxon = this.getRandomSoldier(this.saxonArmy);

      const attackResult = this.getDamageResult(
        attacker,
        randomViking,
        randomSaxon
      );

      console.log(attackResult);
      return attackResult;
    }
  }
}
