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

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    let message = "";
    this.health = this.health - damage;
    if (this.health > 0) {
      message = `${this.name} has received ${damage} points of damage`;
    } else {
      message = `${this.name} has died in act of combat`;
    }

    return message;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    let message = "";
    this.health = this.health - damage;
    if (this.health > 0) {
      message = `A Saxon has received ${damage} points of damage`;
    } else {
      message = `A Saxon has died in combat`;
    }

    return message;
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
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const attackerViking = this.vikingArmy[randomViking];
    const defenderSaxon = this.saxonArmy[randomSaxon];
    const result = defenderSaxon.receiveDamage(attackerViking.strength);

    if (defenderSaxon.health <= 0) {
      this.saxonArmy.splice(defenderSaxon, 1);
    }
    return result;
  }

  saxonAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const defenderViking = this.vikingArmy[randomViking];
    const attackerSaxon = this.saxonArmy[randomSaxon];
    const result = defenderViking.receiveDamage(attackerSaxon.strength);

    if (defenderViking.health <= 0) {
      this.vikingArmy.splice(defenderViking, 1);
    }

    return result;
  }

  showStatus() {
    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === this.saxonArmy.length) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
